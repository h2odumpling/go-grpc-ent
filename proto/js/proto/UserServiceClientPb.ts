/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v4.25.1
// source: proto/user.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as proto_user_pb from '../proto/user_pb'; // proto import: "proto/user.proto"
import * as proto_base_pb from '../proto/base_pb'; // proto import: "proto/base.proto"


export class UserServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreate = new grpcWeb.MethodDescriptor(
    '/pb.UserService/Create',
    grpcWeb.MethodType.UNARY,
    proto_user_pb.CreateUserRequest,
    proto_user_pb.User,
    (request: proto_user_pb.CreateUserRequest) => {
      return request.serializeBinary();
    },
    proto_user_pb.User.deserializeBinary
  );

  create(
    request: proto_user_pb.CreateUserRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_user_pb.User>;

  create(
    request: proto_user_pb.CreateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_user_pb.User) => void): grpcWeb.ClientReadableStream<proto_user_pb.User>;

  create(
    request: proto_user_pb.CreateUserRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_user_pb.User) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.UserService/Create',
        request,
        metadata || {},
        this.methodDescriptorCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.UserService/Create',
    request,
    metadata || {},
    this.methodDescriptorCreate);
  }

  methodDescriptorGet = new grpcWeb.MethodDescriptor(
    '/pb.UserService/Get',
    grpcWeb.MethodType.UNARY,
    proto_user_pb.GetUserRequest,
    proto_user_pb.User,
    (request: proto_user_pb.GetUserRequest) => {
      return request.serializeBinary();
    },
    proto_user_pb.User.deserializeBinary
  );

  get(
    request: proto_user_pb.GetUserRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_user_pb.User>;

  get(
    request: proto_user_pb.GetUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_user_pb.User) => void): grpcWeb.ClientReadableStream<proto_user_pb.User>;

  get(
    request: proto_user_pb.GetUserRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_user_pb.User) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.UserService/Get',
        request,
        metadata || {},
        this.methodDescriptorGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.UserService/Get',
    request,
    metadata || {},
    this.methodDescriptorGet);
  }

  methodDescriptorUpdate = new grpcWeb.MethodDescriptor(
    '/pb.UserService/Update',
    grpcWeb.MethodType.UNARY,
    proto_user_pb.UpdateUserRequest,
    proto_user_pb.User,
    (request: proto_user_pb.UpdateUserRequest) => {
      return request.serializeBinary();
    },
    proto_user_pb.User.deserializeBinary
  );

  update(
    request: proto_user_pb.UpdateUserRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_user_pb.User>;

  update(
    request: proto_user_pb.UpdateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_user_pb.User) => void): grpcWeb.ClientReadableStream<proto_user_pb.User>;

  update(
    request: proto_user_pb.UpdateUserRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_user_pb.User) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.UserService/Update',
        request,
        metadata || {},
        this.methodDescriptorUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.UserService/Update',
    request,
    metadata || {},
    this.methodDescriptorUpdate);
  }

  methodDescriptorDelete = new grpcWeb.MethodDescriptor(
    '/pb.UserService/Delete',
    grpcWeb.MethodType.UNARY,
    proto_base_pb.DeleteRequest,
    google_protobuf_empty_pb.Empty,
    (request: proto_base_pb.DeleteRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  delete(
    request: proto_base_pb.DeleteRequest,
    metadata?: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  delete(
    request: proto_base_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  delete(
    request: proto_base_pb.DeleteRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.UserService/Delete',
        request,
        metadata || {},
        this.methodDescriptorDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.UserService/Delete',
    request,
    metadata || {},
    this.methodDescriptorDelete);
  }

  methodDescriptorList = new grpcWeb.MethodDescriptor(
    '/pb.UserService/List',
    grpcWeb.MethodType.UNARY,
    proto_base_pb.ListRequest,
    proto_user_pb.ListUserResponse,
    (request: proto_base_pb.ListRequest) => {
      return request.serializeBinary();
    },
    proto_user_pb.ListUserResponse.deserializeBinary
  );

  list(
    request: proto_base_pb.ListRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_user_pb.ListUserResponse>;

  list(
    request: proto_base_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_user_pb.ListUserResponse) => void): grpcWeb.ClientReadableStream<proto_user_pb.ListUserResponse>;

  list(
    request: proto_base_pb.ListRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_user_pb.ListUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.UserService/List',
        request,
        metadata || {},
        this.methodDescriptorList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.UserService/List',
    request,
    metadata || {},
    this.methodDescriptorList);
  }

  methodDescriptorBatchCreate = new grpcWeb.MethodDescriptor(
    '/pb.UserService/BatchCreate',
    grpcWeb.MethodType.UNARY,
    proto_user_pb.BatchCreateUsersRequest,
    proto_user_pb.BatchCreateUsersResponse,
    (request: proto_user_pb.BatchCreateUsersRequest) => {
      return request.serializeBinary();
    },
    proto_user_pb.BatchCreateUsersResponse.deserializeBinary
  );

  batchCreate(
    request: proto_user_pb.BatchCreateUsersRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_user_pb.BatchCreateUsersResponse>;

  batchCreate(
    request: proto_user_pb.BatchCreateUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_user_pb.BatchCreateUsersResponse) => void): grpcWeb.ClientReadableStream<proto_user_pb.BatchCreateUsersResponse>;

  batchCreate(
    request: proto_user_pb.BatchCreateUsersRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_user_pb.BatchCreateUsersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.UserService/BatchCreate',
        request,
        metadata || {},
        this.methodDescriptorBatchCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.UserService/BatchCreate',
    request,
    metadata || {},
    this.methodDescriptorBatchCreate);
  }

  methodDescriptorExport = new grpcWeb.MethodDescriptor(
    '/pb.UserService/Export',
    grpcWeb.MethodType.UNARY,
    proto_base_pb.ListRequest,
    proto_base_pb.ExportResponse,
    (request: proto_base_pb.ListRequest) => {
      return request.serializeBinary();
    },
    proto_base_pb.ExportResponse.deserializeBinary
  );

  export(
    request: proto_base_pb.ListRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_base_pb.ExportResponse>;

  export(
    request: proto_base_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_base_pb.ExportResponse) => void): grpcWeb.ClientReadableStream<proto_base_pb.ExportResponse>;

  export(
    request: proto_base_pb.ListRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_base_pb.ExportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.UserService/Export',
        request,
        metadata || {},
        this.methodDescriptorExport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.UserService/Export',
    request,
    metadata || {},
    this.methodDescriptorExport);
  }

}

