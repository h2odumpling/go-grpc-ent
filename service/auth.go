package service

import (
	"context"
	"grpc/ent"
	"grpc/ent/user"
	pb "grpc/proto"
	"grpc/provider/auth"
	"grpc/provider/db"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type AuthService struct {
	pb.UnimplementedAuthServiceServer
}

func (a *AuthService) Login(ctx context.Context, r *pb.LoginRequest) (*pb.LoginResponse, error) {
	user, err := db.Db().User.Query().Where(user.UsernameEQ(r.Username)).First(ctx)
	if err != nil {
		return nil, err
	}
	token := auth.BuildToken(user.ID)
	return &pb.LoginResponse{
		User:  ToMessage[pb.User](user),
		Token: token,
	}, nil
}

func (a *AuthService) Logout(context.Context, *pb.Empty) (*pb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Logout not implemented")
}

func (a *AuthService) Info(ctx context.Context, r *pb.Empty) (*pb.User, error) {
	return ToMessage[pb.User](auth.Auth(ctx).Info.(ent.User)), nil
}

func (a *AuthService) RefreshToken(ctx context.Context, r *pb.Empty) (*pb.RefreshTokenResponse, error) {
	return &pb.RefreshTokenResponse{
		Token: auth.RefreshToken(ctx),
	}, nil
}
