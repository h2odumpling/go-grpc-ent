package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// User holds the schema definition for the User entity.
type UserInfo struct {
	ent.Schema
}

func (UserInfo) Mixin() []ent.Mixin {
	return []ent.Mixin{
		TimeStampMixin{},
		SoftDeleteMixin{},
	}
}

// Fields of the User.
func (UserInfo) Fields() []ent.Field {
	return []ent.Field{
		field.Int("user_id"),
		field.String("address").NotEmpty(),
	}
}

// Edges of the User.
func (UserInfo) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("user", User.Type).Ref("info").Unique().Required().Field("user_id"),
	}
}
