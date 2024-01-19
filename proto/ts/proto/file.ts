/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.25.1
 * source: proto/file.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace pb {
    export class FileInfoRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            code?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("code" in data && data.code != undefined) {
                    this.code = data.code;
                }
            }
        }
        get code() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set code(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            code?: string;
        }): FileInfoRequest {
            const message = new FileInfoRequest({});
            if (data.code != null) {
                message.code = data.code;
            }
            return message;
        }
        toObject() {
            const data: {
                code?: string;
            } = {};
            if (this.code != null) {
                data.code = this.code;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.code.length)
                writer.writeString(1, this.code);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FileInfoRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FileInfoRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.code = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): FileInfoRequest {
            return FileInfoRequest.deserialize(bytes);
        }
    }
    export class FileInfo extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            code?: string;
            status?: number;
            path?: string;
            filename?: string;
            fullname?: string;
            ext?: string;
            size?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("code" in data && data.code != undefined) {
                    this.code = data.code;
                }
                if ("status" in data && data.status != undefined) {
                    this.status = data.status;
                }
                if ("path" in data && data.path != undefined) {
                    this.path = data.path;
                }
                if ("filename" in data && data.filename != undefined) {
                    this.filename = data.filename;
                }
                if ("fullname" in data && data.fullname != undefined) {
                    this.fullname = data.fullname;
                }
                if ("ext" in data && data.ext != undefined) {
                    this.ext = data.ext;
                }
                if ("size" in data && data.size != undefined) {
                    this.size = data.size;
                }
            }
        }
        get code() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set code(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get status() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set status(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get path() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set path(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get filename() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set filename(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get fullname() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set fullname(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get ext() {
            return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
        }
        set ext(value: string) {
            pb_1.Message.setField(this, 6, value);
        }
        get size() {
            return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
        }
        set size(value: number) {
            pb_1.Message.setField(this, 7, value);
        }
        static fromObject(data: {
            code?: string;
            status?: number;
            path?: string;
            filename?: string;
            fullname?: string;
            ext?: string;
            size?: number;
        }): FileInfo {
            const message = new FileInfo({});
            if (data.code != null) {
                message.code = data.code;
            }
            if (data.status != null) {
                message.status = data.status;
            }
            if (data.path != null) {
                message.path = data.path;
            }
            if (data.filename != null) {
                message.filename = data.filename;
            }
            if (data.fullname != null) {
                message.fullname = data.fullname;
            }
            if (data.ext != null) {
                message.ext = data.ext;
            }
            if (data.size != null) {
                message.size = data.size;
            }
            return message;
        }
        toObject() {
            const data: {
                code?: string;
                status?: number;
                path?: string;
                filename?: string;
                fullname?: string;
                ext?: string;
                size?: number;
            } = {};
            if (this.code != null) {
                data.code = this.code;
            }
            if (this.status != null) {
                data.status = this.status;
            }
            if (this.path != null) {
                data.path = this.path;
            }
            if (this.filename != null) {
                data.filename = this.filename;
            }
            if (this.fullname != null) {
                data.fullname = this.fullname;
            }
            if (this.ext != null) {
                data.ext = this.ext;
            }
            if (this.size != null) {
                data.size = this.size;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.code.length)
                writer.writeString(1, this.code);
            if (this.status != 0)
                writer.writeInt32(2, this.status);
            if (this.path.length)
                writer.writeString(3, this.path);
            if (this.filename.length)
                writer.writeString(4, this.filename);
            if (this.fullname.length)
                writer.writeString(5, this.fullname);
            if (this.ext.length)
                writer.writeString(6, this.ext);
            if (this.size != 0)
                writer.writeInt64(7, this.size);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FileInfo {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FileInfo();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.code = reader.readString();
                        break;
                    case 2:
                        message.status = reader.readInt32();
                        break;
                    case 3:
                        message.path = reader.readString();
                        break;
                    case 4:
                        message.filename = reader.readString();
                        break;
                    case 5:
                        message.fullname = reader.readString();
                        break;
                    case 6:
                        message.ext = reader.readString();
                        break;
                    case 7:
                        message.size = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): FileInfo {
            return FileInfo.deserialize(bytes);
        }
    }
    export class DownloadFileRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            code?: string;
            start?: number;
            end?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("code" in data && data.code != undefined) {
                    this.code = data.code;
                }
                if ("start" in data && data.start != undefined) {
                    this.start = data.start;
                }
                if ("end" in data && data.end != undefined) {
                    this.end = data.end;
                }
            }
        }
        get code() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set code(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get start() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set start(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get end() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set end(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            code?: string;
            start?: number;
            end?: number;
        }): DownloadFileRequest {
            const message = new DownloadFileRequest({});
            if (data.code != null) {
                message.code = data.code;
            }
            if (data.start != null) {
                message.start = data.start;
            }
            if (data.end != null) {
                message.end = data.end;
            }
            return message;
        }
        toObject() {
            const data: {
                code?: string;
                start?: number;
                end?: number;
            } = {};
            if (this.code != null) {
                data.code = this.code;
            }
            if (this.start != null) {
                data.start = this.start;
            }
            if (this.end != null) {
                data.end = this.end;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.code.length)
                writer.writeString(1, this.code);
            if (this.start != 0)
                writer.writeInt64(2, this.start);
            if (this.end != 0)
                writer.writeInt64(3, this.end);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DownloadFileRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DownloadFileRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.code = reader.readString();
                        break;
                    case 2:
                        message.start = reader.readInt64();
                        break;
                    case 3:
                        message.end = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): DownloadFileRequest {
            return DownloadFileRequest.deserialize(bytes);
        }
    }
    export class Chunk extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            content?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("content" in data && data.content != undefined) {
                    this.content = data.content;
                }
            }
        }
        get content() {
            return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0)) as Uint8Array;
        }
        set content(value: Uint8Array) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            content?: Uint8Array;
        }): Chunk {
            const message = new Chunk({});
            if (data.content != null) {
                message.content = data.content;
            }
            return message;
        }
        toObject() {
            const data: {
                content?: Uint8Array;
            } = {};
            if (this.content != null) {
                data.content = this.content;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.content.length)
                writer.writeBytes(1, this.content);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Chunk {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Chunk();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.content = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Chunk {
            return Chunk.deserialize(bytes);
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
    export abstract class UnimplementedFileServiceService {
        static definition = {
            Info: {
                path: "/pb.FileService/Info",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: FileInfoRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => FileInfoRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: FileInfo) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => FileInfo.deserialize(new Uint8Array(bytes))
            },
            Download: {
                path: "/pb.FileService/Download",
                requestStream: false,
                responseStream: true,
                requestSerialize: (message: DownloadFileRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => DownloadFileRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: Chunk) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => Chunk.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Info(call: grpc_1.ServerUnaryCall<FileInfoRequest, FileInfo>, callback: grpc_1.sendUnaryData<FileInfo>): void;
        abstract Download(call: grpc_1.ServerWritableStream<DownloadFileRequest, Chunk>): void;
    }
    export class FileServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedFileServiceService.definition, "FileService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        Info: GrpcUnaryServiceInterface<FileInfoRequest, FileInfo> = (message: FileInfoRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<FileInfo>, options?: grpc_1.CallOptions | grpc_1.requestCallback<FileInfo>, callback?: grpc_1.requestCallback<FileInfo>): grpc_1.ClientUnaryCall => {
            return super.Info(message, metadata, options, callback);
        };
        Download: GrpcStreamServiceInterface<DownloadFileRequest, Chunk> = (message: DownloadFileRequest, metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<Chunk> => {
            return super.Download(message, metadata, options);
        };
    }
}