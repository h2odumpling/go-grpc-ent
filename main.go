package main

import (
	"flag"
	"fmt"
	"log"
	"net"

	pb "grpc/proto"
	"grpc/provider/cache"
	"grpc/provider/db"
	"grpc/service"

	"google.golang.org/grpc"
)

func init() {
	db.Setup()
	db.AutoMigrate()

	cache.Setup()
}

var (
	port = flag.Int("port", 50051, "The server port")
)

func main() {
	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()

	pb.RegisterUserServiceServer(s, new(service.UserService))
	pb.RegisterFileServiceServer(s, new(service.FileService))

	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
