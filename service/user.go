package service

import (
	"context"
	"grpc/ent"
	"grpc/ent/user"
	"grpc/ent/userinfo"
	pb "grpc/proto"
	"grpc/provider/db"
	"reflect"

	"google.golang.org/protobuf/types/known/emptypb"
)

type UserService struct {
	pb.UnimplementedUserServiceServer
}

var thisModel *ent.UserClient

// func init() {
// 	thisModel = db.Db().User
// }

func (UserService) Create(ctx context.Context, r *pb.CreateUserRequest) (*pb.User, error) {
	if r != nil {
		model := db.Db().User.Create().Assign(r.User).SaveX(ctx)

		info_model := db.Db().UserInfo.Create().SetUser(model).Assign(r.User.Info).SaveX(ctx)

		model.Edges.Info = info_model

		return ToMessage[pb.User](model), nil
	}
	return &pb.User{}, nil
}

func (UserService) Get(ctx context.Context, r *pb.GetUserRequest) (*pb.User, error) {
	model := db.Db().User.Query().Where(user.IDEQ(int(r.Id))).WithInfo().FirstX(ctx)

	return ToMessage[pb.User](model), nil
}

func (UserService) Update(ctx context.Context, r *pb.UpdateUserRequest) (*pb.User, error) {
	if r != nil {
		model := db.Db().User.Query().Where(user.IDEQ(int(r.User.Id))).WithInfo().FirstX(ctx)
		info_model := model.Edges.Info.Update().Assign(r.User.Info).SaveX(ctx)
		model = db.Db().User.UpdateOneID(int(r.User.Id)).Assign(r.User).SaveX(ctx)

		model.Edges.Info = info_model

		return ToMessage[pb.User](model), nil
	}
	return &pb.User{}, nil
}

func (UserService) Delete(ctx context.Context, r *pb.DeleteRequest) (*emptypb.Empty, error) {
	db.Db().User.DeleteOneID(int(r.Id)).ExecX(ctx)
	db.Db().UserInfo.Delete().Where(userinfo.UserIDEQ(int(r.Id))).ExecX(ctx)
	return nil, nil
}

func (s *UserService) List(ctx context.Context, r *pb.ListRequest) (*pb.ListUserResponse, error) {
	list := NewList[pb.User](Config{
		Model: db.Db().User,
		Join:  map[string]string{"info": "user"},
	}).
		Request(r).
		Query(func(v reflect.Value) any {
			return v.Interface().(*ent.UserQuery).Where(user.IDEQ(56))
		}).
		Get(ctx)

	return &pb.ListUserResponse{UserList: list}, nil
}

func (UserService) BatchCreate(ctx context.Context, r *pb.BatchCreateUsersRequest) (*pb.BatchCreateUsersResponse, error) {
	model := db.Db().User.MapCreateBulk(r.Requests, func(uc *ent.UserCreate, i int) {
		uc.Assign(r.Requests[i].User)
	}).SaveX(ctx)

	return &pb.BatchCreateUsersResponse{Users: ToMessageArr[pb.User](model)}, nil
}
