/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.25.1
 * source: proto/auth.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./base";
import * as dependency_2 from "./user";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace pb {
    export class LoginRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            username?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("username" in data && data.username != undefined) {
                    this.username = data.username;
                }
            }
        }
        get username() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set username(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            username?: string;
        }): LoginRequest {
            const message = new LoginRequest({});
            if (data.username != null) {
                message.username = data.username;
            }
            return message;
        }
        toObject() {
            const data: {
                username?: string;
            } = {};
            if (this.username != null) {
                data.username = this.username;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.username.length)
                writer.writeString(1, this.username);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LoginRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LoginRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.username = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): LoginRequest {
            return LoginRequest.deserialize(bytes);
        }
    }
    export class LoginResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            user?: dependency_2.pb.User;
            token?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("user" in data && data.user != undefined) {
                    this.user = data.user;
                }
                if ("token" in data && data.token != undefined) {
                    this.token = data.token;
                }
            }
        }
        get user() {
            return pb_1.Message.getWrapperField(this, dependency_2.pb.User, 1) as dependency_2.pb.User;
        }
        set user(value: dependency_2.pb.User) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_user() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get token() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set token(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            user?: ReturnType<typeof dependency_2.pb.User.prototype.toObject>;
            token?: string;
        }): LoginResponse {
            const message = new LoginResponse({});
            if (data.user != null) {
                message.user = dependency_2.pb.User.fromObject(data.user);
            }
            if (data.token != null) {
                message.token = data.token;
            }
            return message;
        }
        toObject() {
            const data: {
                user?: ReturnType<typeof dependency_2.pb.User.prototype.toObject>;
                token?: string;
            } = {};
            if (this.user != null) {
                data.user = this.user.toObject();
            }
            if (this.token != null) {
                data.token = this.token;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_user)
                writer.writeMessage(1, this.user, () => this.user.serialize(writer));
            if (this.token.length)
                writer.writeString(2, this.token);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LoginResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LoginResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.user, () => message.user = dependency_2.pb.User.deserialize(reader));
                        break;
                    case 2:
                        message.token = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): LoginResponse {
            return LoginResponse.deserialize(bytes);
        }
    }
    export class RefreshTokenResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            token?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("token" in data && data.token != undefined) {
                    this.token = data.token;
                }
            }
        }
        get token() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set token(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            token?: string;
        }): RefreshTokenResponse {
            const message = new RefreshTokenResponse({});
            if (data.token != null) {
                message.token = data.token;
            }
            return message;
        }
        toObject() {
            const data: {
                token?: string;
            } = {};
            if (this.token != null) {
                data.token = this.token;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.token.length)
                writer.writeString(1, this.token);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RefreshTokenResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RefreshTokenResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.token = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): RefreshTokenResponse {
            return RefreshTokenResponse.deserialize(bytes);
        }
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    interface GrpcStreamServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
        (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    }
    interface GrpWritableServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    }
    interface GrpcChunkServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
        (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    }
    interface GrpcPromiseServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
        (message: P, options?: grpc_1.CallOptions): Promise<R>;
    }
    export abstract class UnimplementedAuthServiceService {
        static definition = {
            Login: {
                path: "/pb.AuthService/Login",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: LoginRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => LoginRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: LoginResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => LoginResponse.deserialize(new Uint8Array(bytes))
            },
            Logout: {
                path: "/pb.AuthService/Logout",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.pb.Empty) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.pb.Empty.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.pb.Empty) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.pb.Empty.deserialize(new Uint8Array(bytes))
            },
            Info: {
                path: "/pb.AuthService/Info",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.pb.Empty) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.pb.Empty.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_2.pb.User) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_2.pb.User.deserialize(new Uint8Array(bytes))
            },
            RefreshToken: {
                path: "/pb.AuthService/RefreshToken",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_1.pb.Empty) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_1.pb.Empty.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: RefreshTokenResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => RefreshTokenResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Login(call: grpc_1.ServerUnaryCall<LoginRequest, LoginResponse>, callback: grpc_1.sendUnaryData<LoginResponse>): void;
        abstract Logout(call: grpc_1.ServerUnaryCall<dependency_1.pb.Empty, dependency_1.pb.Empty>, callback: grpc_1.sendUnaryData<dependency_1.pb.Empty>): void;
        abstract Info(call: grpc_1.ServerUnaryCall<dependency_1.pb.Empty, dependency_2.pb.User>, callback: grpc_1.sendUnaryData<dependency_2.pb.User>): void;
        abstract RefreshToken(call: grpc_1.ServerUnaryCall<dependency_1.pb.Empty, RefreshTokenResponse>, callback: grpc_1.sendUnaryData<RefreshTokenResponse>): void;
    }
    export class AuthServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedAuthServiceService.definition, "AuthService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        Login: GrpcUnaryServiceInterface<LoginRequest, LoginResponse> = (message: LoginRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<LoginResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<LoginResponse>, callback?: grpc_1.requestCallback<LoginResponse>): grpc_1.ClientUnaryCall => {
            return super.Login(message, metadata, options, callback);
        };
        Logout: GrpcUnaryServiceInterface<dependency_1.pb.Empty, dependency_1.pb.Empty> = (message: dependency_1.pb.Empty, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.pb.Empty>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.pb.Empty>, callback?: grpc_1.requestCallback<dependency_1.pb.Empty>): grpc_1.ClientUnaryCall => {
            return super.Logout(message, metadata, options, callback);
        };
        Info: GrpcUnaryServiceInterface<dependency_1.pb.Empty, dependency_2.pb.User> = (message: dependency_1.pb.Empty, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_2.pb.User>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_2.pb.User>, callback?: grpc_1.requestCallback<dependency_2.pb.User>): grpc_1.ClientUnaryCall => {
            return super.Info(message, metadata, options, callback);
        };
        RefreshToken: GrpcUnaryServiceInterface<dependency_1.pb.Empty, RefreshTokenResponse> = (message: dependency_1.pb.Empty, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<RefreshTokenResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<RefreshTokenResponse>, callback?: grpc_1.requestCallback<RefreshTokenResponse>): grpc_1.ClientUnaryCall => {
            return super.RefreshToken(message, metadata, options, callback);
        };
    }
}