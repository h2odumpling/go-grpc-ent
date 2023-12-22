package service

import (
	"context"
	"grpc/helpers/strh"
	pb "grpc/proto"
	"reflect"
	"strings"

	"entgo.io/ent/dialect/sql"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type List[T any] struct {
	QueryReflect reflect.Value //查询结构体的反射值
	Config       Config
	Size         int //单页大小
	Page         int //页号
}

type Config struct {
	Model any               //使用的具体模型
	Join  map[string]string //使用的关联关系
}

// 初始化列表搜索
func NewList[T any](config Config) *List[T] {
	l := new(List[T])
	l.Config = config
	//使用反射绕过输出类型断言
	l.QueryReflect = reflect.ValueOf(l.Config.Model).MethodByName("Query").Call([]reflect.Value{})[0]
	return l
}

// 设置请求体
func (l *List[T]) Request(r *pb.ListRequest) *List[T] {

	l.Size = int(r.Size)
	l.Page = int(r.Page)

	//查询条件整合
	query_func := make(map[string][]func(*sql.Selector), 10)

	for i := 0; i < len(r.Params); i++ {
		p := r.Params[i]

		var fieldName string
		var relation string

		arr := strings.Split(p.Field, ".")
		if len(arr) == 1 {
			fieldName = arr[0]
			relation = "origin"
		} else {
			fieldName = arr[1]
			relation = arr[0]
		}

		//按字段类型过滤操作器
		// if err := OperatorCheck(mutation, p); err != nil {
		// 	return nil, err
		// }

		if _, ok := l.Config.Join[relation]; !ok && relation != "origin" {
			panic(status.Errorf(codes.InvalidArgument, "invalid field %v", p.Field))
		} else {
			switch p.Operator {
			case "=":
				query_func[relation] = append(query_func[relation], sql.FieldEQ(fieldName, p.Value[0]))
			case "!=":
				query_func[relation] = append(query_func[relation], sql.FieldNEQ(fieldName, p.Value[0]))
			case ">":
				query_func[relation] = append(query_func[relation], sql.FieldGT(fieldName, p.Value[0]))
			case ">=":
				query_func[relation] = append(query_func[relation], sql.FieldGTE(fieldName, p.Value[0]))
			case "<":
				query_func[relation] = append(query_func[relation], sql.FieldLT(fieldName, p.Value[0]))
			case "<=":
				query_func[relation] = append(query_func[relation], sql.FieldLTE(fieldName, p.Value[0]))
			case "in":
				query_func[relation] = append(query_func[relation], sql.FieldIn(fieldName, p.Value[0]))
			case "not_in":
				query_func[relation] = append(query_func[relation], sql.FieldNotIn(fieldName, p.Value[0]))
			case "like":
				query_func[relation] = append(query_func[relation], sql.FieldContains(fieldName, p.Value[0]))
			case "%like":
				query_func[relation] = append(query_func[relation], sql.FieldHasPrefix(fieldName, p.Value[0]))
			case "like%":
				query_func[relation] = append(query_func[relation], sql.FieldHasSuffix(fieldName, p.Value[0]))
			case "between":
				query_func[relation] = append(query_func[relation], sql.FieldGTE(fieldName, p.Value[0]))
				query_func[relation] = append(query_func[relation], sql.FieldLTE(fieldName, p.Value[1]))
			default:
				//返回过滤器err 可在上方统一过滤
				panic(status.Errorf(codes.InvalidArgument, "%v don't have operator %v", p.Field, p.Operator))
			}
		}
	}

	//sql推入ent图
	for i, v := range query_func {
		if i == "origin" {
			for _, vs := range v {
				l.QueryReflect = l.QueryReflect.MethodByName("Where").Call([]reflect.Value{reflect.ValueOf(vs)})[0]
			}
		} else {
			l.QueryReflect = l.QueryReflect.MethodByName("Query" + strh.FromSnake(i)).Call([]reflect.Value{})[0]
			for _, vs := range v {
				l.QueryReflect = l.QueryReflect.MethodByName("Where").Call([]reflect.Value{reflect.ValueOf(vs)})[0]
			}
			l.QueryReflect = l.QueryReflect.MethodByName("Query" + strh.FromSnake(l.Config.Join[i])).Call([]reflect.Value{})[0]
		}
	}

	return l
}

// 提供条件插入逻辑
func (l *List[T]) Query(opts ...func(reflect.Value) any) *List[T] {
	for _, v := range opts {
		l.QueryReflect = reflect.ValueOf(v(l.QueryReflect))
	}
	return l
}

func (l *List[T]) SelectFields(ctx context.Context) *List[T] {
	//select field
	message := new(T)
	select_field := MessageToField(reflect.ValueOf(message), "origin")

	//select推入ent图
	for i, v := range select_field {
		v_arr := make([]reflect.Value, 0)
		for _, vs := range v {
			v_arr = append(v_arr, reflect.ValueOf(vs))
		}
		if i == "origin" {
			l.QueryReflect = l.QueryReflect.MethodByName("Select").Call(v_arr)[0]
		} else {
			if _, ok := l.Config.Join[i]; ok {
				func_typ := l.QueryReflect.MethodByName("With" + strh.FromSnake(i)).Type().In(0).Elem()
				select_fun := reflect.MakeFunc(func_typ, func(args []reflect.Value) (results []reflect.Value) {
					args[0].MethodByName("Select").Call(v_arr)
					return
				})

				l.QueryReflect = l.QueryReflect.MethodByName("With" + strh.FromSnake(i)).Call([]reflect.Value{select_fun})[0]
			}
		}
	}

	return l
}

// sql执行方法
func (l *List[T]) Get(ctx context.Context) []*T {
	l = l.SelectFields(ctx)

	//分页
	l.QueryReflect = l.QueryReflect.MethodByName("Offset").Call([]reflect.Value{reflect.ValueOf(int(l.Size) * int(l.Page-1))})[0]
	l.QueryReflect = l.QueryReflect.MethodByName("Limit").Call([]reflect.Value{reflect.ValueOf(int(l.Size))})[0]
	//执行查询
	l.QueryReflect = l.QueryReflect.MethodByName("All").Call([]reflect.Value{reflect.ValueOf(ctx)})[0]

	//把模型转换为grpc输出
	return ToMessageArr[T](l.QueryReflect.Interface())
}

func (l *List[T]) Export(ctx context.Context) {
	l.QueryReflect = l.QueryReflect.MethodByName("All").Call([]reflect.Value{reflect.ValueOf(ctx)})[0]

}
