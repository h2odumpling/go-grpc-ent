package schema

import (
	"context"
	"fmt"

	"time"

	entp "grpc/ent"
	"grpc/ent/hook"
	"grpc/ent/intercept"

	"entgo.io/ent"
	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/mixin"
)

type TimeStampMixin struct {
	mixin.Schema
}

func (TimeStampMixin) Fields() []ent.Field {
	return []ent.Field{
		field.Time("created_at").Immutable().Default(time.Now),
		field.Time("updated_at").Default(time.Now).UpdateDefault(time.Now),
	}
}

type SoftDeleteMixin struct {
	mixin.Schema
}

func (SoftDeleteMixin) Fields() []ent.Field {
	return []ent.Field{
		field.Time("deleted_at").Optional(),
	}
}

type softDeleteKey struct{}

func SkipSoftDelete(ctx context.Context) context.Context {
	return context.WithValue(ctx, softDeleteKey{}, true)
}

type onlyTrashedKey struct{}

func OnlyTrashed(ctx context.Context) context.Context {
	return context.WithValue(ctx, onlyTrashedKey{}, true)
}

func (d SoftDeleteMixin) Interceptors() []ent.Interceptor {
	return []ent.Interceptor{
		intercept.TraverseFunc(func(ctx context.Context, q intercept.Query) error {

			if skip, _ := ctx.Value(softDeleteKey{}).(bool); skip {
				return nil
			} else if skip, _ := ctx.Value(onlyTrashedKey{}).(bool); skip {
				d.TrashedFilter(q)
				return nil
			}

			d.SoftFilter(q)
			return nil
		}),
	}
}

func (d SoftDeleteMixin) Hooks() []ent.Hook {
	return []ent.Hook{
		hook.On(
			func(next ent.Mutator) ent.Mutator {
				return ent.MutateFunc(func(ctx context.Context, m ent.Mutation) (ent.Value, error) {
					if skip, _ := ctx.Value(softDeleteKey{}).(bool); skip {
						return next.Mutate(ctx, m)
					}
					mx, ok := m.(interface {
						SetOp(ent.Op)
						Client() *entp.Client
						SetDeletedAt(time.Time)
						WhereP(...func(*sql.Selector))
					})
					if !ok {
						return nil, fmt.Errorf("unexpected mutation type %T", m)
					}
					d.SoftFilter(mx)
					mx.SetOp(ent.OpUpdate)
					mx.SetDeletedAt(time.Now())
					return mx.Client().Mutate(ctx, m)
				})
			},
			ent.OpDeleteOne|ent.OpDelete,
		),
	}
}

func (d SoftDeleteMixin) SoftFilter(w interface{ WhereP(...func(*sql.Selector)) }) {
	w.WhereP(
		sql.FieldIsNull(d.Fields()[0].Descriptor().Name),
	)
}

func (d SoftDeleteMixin) TrashedFilter(w interface{ WhereP(...func(*sql.Selector)) }) {
	w.WhereP(
		sql.FieldNotNull(d.Fields()[0].Descriptor().Name),
	)
}
