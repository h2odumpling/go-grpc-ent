package auth

import (
	"context"
	"fmt"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"github.com/grpc-ecosystem/go-grpc-middleware/v2/interceptors/auth"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type JwtAuth struct{}

func (j JwtAuth) BuildToken(id int) (token string) {
	t := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"id":     id,
		"expire": time.Now().Add(time.Hour * 2).Unix(),
	})
	token, _ = t.SignedString(Secret)
	return
}

func (j JwtAuth) CheckToken(token string) (int, error) {
	t, err := jwt.Parse(token, func(t *jwt.Token) (interface{}, error) {
		if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", t.Header["alg"])
		}
		return Secret, nil
	})

	if err != nil {
		return -1, err
	}

	claims, _ := t.Claims.(jwt.MapClaims)

	return int(claims["id"].(float64)), nil
}

func (j JwtAuth) AuthFun(fn func(context.Context, int) (any, error)) AuthFunc {
	return func(ctx context.Context) (context.Context, error) {
		token, err := auth.AuthFromMD(ctx, AuthorizationType)
		if err != nil {
			return nil, status.Errorf(codes.PermissionDenied, err.Error())
		}

		id, err := CheckToken(token)
		if err != nil {
			return nil, status.Errorf(codes.PermissionDenied, err.Error())
		}

		info, err := fn(ctx, id)
		if err != nil {
			return nil, status.Errorf(codes.PermissionDenied, err.Error())
		}

		return context.WithValue(ctx, ContextKey, UserInfo{
			ID:   id,
			Info: info,
		}), nil
	}
}
