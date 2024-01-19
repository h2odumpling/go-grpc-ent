package auth

import (
	"context"
	"grpc/ent/user"
	"grpc/provider/db"
	"time"

	middleware "github.com/grpc-ecosystem/go-grpc-middleware/v2"
	"google.golang.org/grpc"
)

const ContextKey = "auth"
const AuthorizationType = "bearer"

var defaultProvider = JwtAuth{}

const TokenExpireDuration = time.Hour * 2

var Secret = []byte("mysecret")

type AuthFunc func(ctx context.Context) (context.Context, error)

type ServiceAuthFuncOverride interface {
	AuthFuncOverride(ctx context.Context, fullMethodName string) (context.Context, error)
}

type AuthProvider interface {
	BuildToken(id int) (token string)
	CheckToken(token string) (int, error)
	AuthFun(fn func(context.Context, int) (any, error)) AuthFunc
}

type UserInfo struct {
	ID   int
	Info any
}

var Provider AuthProvider

func BuildToken(id int) (token string) {
	Provider = defaultProvider
	token = Provider.BuildToken(id)
	return
}

func CheckToken(token string) (int, error) {
	Provider = defaultProvider
	return Provider.CheckToken(token)
}

func GetAuthFunc() AuthFunc {
	Provider = defaultProvider
	return Provider.AuthFun(func(ctx context.Context, id int) (any, error) {
		return db.Db().User.Query().WithInfo().Where(user.IDEQ(id)).First(ctx)
	})
}

func UnarySkipAuth(info *grpc.UnaryServerInfo) bool {
	if _, ok := unauth[info.FullMethod]; ok {
		return true
	}
	return false
}

func UnaryServerInterceptor() grpc.UnaryServerInterceptor {
	return func(ctx context.Context, req any, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (any, error) {
		if UnarySkipAuth(info) {
			return handler(ctx, req)
		}

		var newCtx context.Context
		var err error
		if overrideSrv, ok := info.Server.(ServiceAuthFuncOverride); ok {
			newCtx, err = overrideSrv.AuthFuncOverride(ctx, info.FullMethod)
		} else {
			newCtx, err = GetAuthFunc()(ctx)
		}
		if err != nil {
			return nil, err
		}
		return handler(newCtx, req)
	}
}

func StreamSkipAuth(info *grpc.StreamServerInfo) bool {
	if _, ok := unauth[info.FullMethod]; ok {
		return true
	}
	return false
}

func StreamServerInterceptor() grpc.StreamServerInterceptor {
	return func(srv any, stream grpc.ServerStream, info *grpc.StreamServerInfo, handler grpc.StreamHandler) error {
		wrapped := middleware.WrapServerStream(stream)
		if StreamSkipAuth(info) {
			return handler(srv, wrapped)
		}

		var newCtx context.Context
		var err error
		if overrideSrv, ok := srv.(ServiceAuthFuncOverride); ok {
			newCtx, err = overrideSrv.AuthFuncOverride(stream.Context(), info.FullMethod)
		} else {
			newCtx, err = GetAuthFunc()(stream.Context())
		}
		if err != nil {
			return err
		}
		wrapped.WrappedContext = newCtx
		return handler(srv, wrapped)
	}
}

func Auth(ctx context.Context) UserInfo {
	userinfo := ctx.Value(ContextKey).(UserInfo)
	return userinfo
}

func RefreshToken(ctx context.Context) (token string) {
	token = Provider.BuildToken(Auth(ctx).ID)
	return
}
