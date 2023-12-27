package cache

import (
	"fmt"

	"github.com/go-redis/redis/v8"
)

var cache *redis.Client

const (
	password = ""
	host     = "127.0.0.1"
	port     = "6379"
	database = 0
)

func Setup() {
	cache = redis.NewClient(&redis.Options{
		Addr:     fmt.Sprintf("%v:%v", host, port),
		Password: password,
		DB:       database,
	})
}

func Defer() {
	cache.Close()
}

func Cache() *redis.Client {
	return cache
}
