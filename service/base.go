package service

import (
	"grpc/helpers/strh"
	pb "grpc/proto"
	"reflect"
	"time"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func ToMessageArr[T any](model any) []*T {
	list := make([]*T, 0)

	val := reflect.ValueOf(model)

	for i := 0; i < val.Len(); i++ {
		list = append(list, ToMessage[T](val.Index(i).Interface()))
	}

	return list
}

func ToMessage[T any](model any) *T {
	out := new(T)
	tp := reflect.TypeOf(out)
	val := reflect.ValueOf(out)

	mv := reflect.ValueOf(model)

	fillMessage(tp, val, mv)

	return out
}

func fillMessage(tp reflect.Type, val, mv reflect.Value) {

	for mv.Kind() == reflect.Ptr {
		mv = mv.Elem()
	}
	if mv.Kind() == reflect.Invalid {
		return
	}

	for tp.Kind() == reflect.Ptr {
		tp = tp.Elem()
	}
	for val.Kind() == reflect.Ptr {
		val = val.Elem()
	}

	for i := 0; i < tp.NumField(); i++ {

		fieldName := tp.Field(i).Name

		if fieldName == "Id" {
			fieldName = "ID"
		}

		t := tp.Field(i).Type
		rv := val.Field(i)

		for t.Kind() == reflect.Ptr {
			t = t.Elem()
		}

		if rv.CanSet() {
			switch kind := t.Kind(); kind {
			case reflect.Int32:
				if fieldName == "ID" {
					rv.Set(reflect.ValueOf(int32(mv.FieldByName(fieldName).Interface().(int))))
				} else {
					rv.Set(mv.FieldByName(fieldName))
				}
			case reflect.Struct:
				switch t.String() {
				case "timestamppb.Timestamp":
					v := mv.FieldByName(fieldName)
					if v.Kind() == reflect.Invalid {
						continue
					}
					rv.Set(reflect.ValueOf(timestamppb.New(v.Interface().(time.Time))))
				default:
					n := reflect.New(t)
					fillMessage(t, n, mv.FieldByName("Edges").FieldByName(fieldName))
					rv.Set(n)
				}
			case reflect.Slice:

			default:
				rv.Set(mv.FieldByName(fieldName))
			}
		}
	}
}

func OperatorCheck(m any, p *pb.ListSearchParams) error {

	field := reflect.ValueOf(m).FieldByName(p.Field)
	kind := field.Kind()
	var op_range map[string]bool

	if kind != reflect.Ptr { //非指针的或非法的都不是模型字段
		return status.Errorf(codes.InvalidArgument, "invalid field %v", p.Field)
	}

	switch field.Type().String() {
	case "*string":
		op_range = map[string]bool{"=": true, "!=": true, "in": true, "not_in": true, "%like": true, "like": true, "like%": true}
	default:
		op_range = map[string]bool{"=": true, "!=": true, "in": true, "not_in": true, ">": true, ">=": true, "<": true, "<=": true, "between": true}
	}

	if _, ok := op_range[p.Operator]; !ok {
		return status.Errorf(codes.InvalidArgument, "%v don't have operator %v", p.Field, p.Operator)
	}

	return nil
}

func MessageToField(v reflect.Value, relation string) map[string][]string {
	field := make(map[string][]string, 10)

	for v.Kind() == reflect.Ptr {
		v = v.Elem()
	}

	t := v.Type()
	for i := 0; i < t.NumField(); i++ {
		rv := v.Field(i)
		if rv.CanSet() {
			field_name := strh.Snake(t.Field(i).Name)
			if rv.Kind() == reflect.Ptr {
				s := reflect.New(rv.Type().Elem())
				if s.Type().String() != "*timestamppb.Timestamp" {
					field[field_name] = MessageToField(s, field_name)[field_name]
					continue
				}
			}
			field[relation] = append(field[relation], field_name)
		}
	}

	return field
}
