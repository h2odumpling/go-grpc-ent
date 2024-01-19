import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as proto_base_pb from '../proto/base_pb'; // proto import: "proto/base.proto"


export class User extends jspb.Message {
  getId(): number;
  setId(value: number): User;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasCreatedAt(): boolean;
  clearCreatedAt(): User;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): User;

  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasDeletedAt(): boolean;
  clearDeletedAt(): User;

  getUsername(): string;
  setUsername(value: string): User;

  getNickname(): string;
  setNickname(value: string): User;

  getInfo(): UserInfo | undefined;
  setInfo(value?: UserInfo): User;
  hasInfo(): boolean;
  clearInfo(): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    username: string,
    nickname: string,
    info?: UserInfo.AsObject,
  }
}

export class UserInfo extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): UserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
  static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInfo;
  static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
  export type AsObject = {
    address: string,
  }
}

export class CreateUserRequest extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): CreateUserRequest;
  hasUser(): boolean;
  clearUser(): CreateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
  static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class GetUserRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetUserRequest;

  getView(): GetUserRequest.View;
  setView(value: GetUserRequest.View): GetUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    id: number,
    view: GetUserRequest.View,
  }

  export enum View { 
    VIEW_UNSPECIFIED = 0,
    BASIC = 1,
    WITH_EDGE_IDS = 2,
  }
}

export class UpdateUserRequest extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): UpdateUserRequest;
  hasUser(): boolean;
  clearUser(): UpdateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
  static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class ListUserResponse extends jspb.Message {
  getUserListList(): Array<User>;
  setUserListList(value: Array<User>): ListUserResponse;
  clearUserListList(): ListUserResponse;
  addUserList(value?: User, index?: number): User;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserResponse): ListUserResponse.AsObject;
  static serializeBinaryToWriter(message: ListUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserResponse;
  static deserializeBinaryFromReader(message: ListUserResponse, reader: jspb.BinaryReader): ListUserResponse;
}

export namespace ListUserResponse {
  export type AsObject = {
    userListList: Array<User.AsObject>,
    nextPageToken: string,
  }
}

export class BatchCreateUsersRequest extends jspb.Message {
  getRequestsList(): Array<CreateUserRequest>;
  setRequestsList(value: Array<CreateUserRequest>): BatchCreateUsersRequest;
  clearRequestsList(): BatchCreateUsersRequest;
  addRequests(value?: CreateUserRequest, index?: number): CreateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateUsersRequest): BatchCreateUsersRequest.AsObject;
  static serializeBinaryToWriter(message: BatchCreateUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateUsersRequest;
  static deserializeBinaryFromReader(message: BatchCreateUsersRequest, reader: jspb.BinaryReader): BatchCreateUsersRequest;
}

export namespace BatchCreateUsersRequest {
  export type AsObject = {
    requestsList: Array<CreateUserRequest.AsObject>,
  }
}

export class BatchCreateUsersResponse extends jspb.Message {
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): BatchCreateUsersResponse;
  clearUsersList(): BatchCreateUsersResponse;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateUsersResponse): BatchCreateUsersResponse.AsObject;
  static serializeBinaryToWriter(message: BatchCreateUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateUsersResponse;
  static deserializeBinaryFromReader(message: BatchCreateUsersResponse, reader: jspb.BinaryReader): BatchCreateUsersResponse;
}

export namespace BatchCreateUsersResponse {
  export type AsObject = {
    usersList: Array<User.AsObject>,
  }
}

