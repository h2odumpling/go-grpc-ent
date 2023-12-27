# go-grpc-ent
a easy use link between grpc and ent

ent generate cmd
```sh
go run entgo.io/ent/cmd/ent generate --feature intercept ./ent/schema --template ./ent
```

proto generate cmd
```sh
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative proto/*.proto
```