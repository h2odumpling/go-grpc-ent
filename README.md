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

proto generate cmd with js
```sh
#js 不支持es6，可使用webpack等打包
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative --js_out=import_style=commonjs:proto/js --grpc-web_out=import_style=typescript,mode=grpcweb:proto/js proto/*.proto

#ts
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative --ts_out=proto/ts proto/*.proto
```