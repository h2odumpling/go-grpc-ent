package db

import (
	"context"
	"fmt"
	"grpc/ent"

	_ "grpc/ent/runtime"

	_ "github.com/go-sql-driver/mysql"
)

var db *ent.Client

const (
	username = "root"
	password = "123456"
	host     = "127.0.0.1"
	port     = "3306"
	database = "grpc"
)

func Setup() {
	var err error

	db, err = ent.Open("mysql", fmt.Sprintf("%v:%v@tcp(%v:%v)/%v?parseTime=True&charset=utf8mb4", username, password, host, port, database))

	if err != nil {
		panic("failed opening connection to mysql :" + err.Error())
	}
}

func AutoMigrate() {
	if err := db.Schema.Create(context.Background()); err != nil {
		panic("failed creating schema resources " + err.Error())
	}
}

func Defer() {
	db.Close()
}

func Db() *ent.Client {
	return db
}
