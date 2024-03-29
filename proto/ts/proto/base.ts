/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.25.1
 * source: proto/base.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace pb {
    export class Empty extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): Empty {
            const message = new Empty({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Empty {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Empty();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Empty {
            return Empty.deserialize(bytes);
        }
    }
    export class DeleteRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            id?: number;
        }): DeleteRequest {
            const message = new DeleteRequest({});
            if (data.id != null) {
                message.id = data.id;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: number;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id != 0)
                writer.writeInt64(1, this.id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DeleteRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DeleteRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): DeleteRequest {
            return DeleteRequest.deserialize(bytes);
        }
    }
    export class DeleteMultiRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            id?: number;
        }): DeleteMultiRequest {
            const message = new DeleteMultiRequest({});
            if (data.id != null) {
                message.id = data.id;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: number;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id != 0)
                writer.writeInt64(1, this.id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DeleteMultiRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DeleteMultiRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): DeleteMultiRequest {
            return DeleteMultiRequest.deserialize(bytes);
        }
    }
    export class ListRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            size?: number;
            page?: number;
            params?: ListSearchParams[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("size" in data && data.size != undefined) {
                    this.size = data.size;
                }
                if ("page" in data && data.page != undefined) {
                    this.page = data.page;
                }
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
            }
        }
        get size() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set size(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get page() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set page(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get params() {
            return pb_1.Message.getRepeatedWrapperField(this, ListSearchParams, 3) as ListSearchParams[];
        }
        set params(value: ListSearchParams[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        static fromObject(data: {
            size?: number;
            page?: number;
            params?: ReturnType<typeof ListSearchParams.prototype.toObject>[];
        }): ListRequest {
            const message = new ListRequest({});
            if (data.size != null) {
                message.size = data.size;
            }
            if (data.page != null) {
                message.page = data.page;
            }
            if (data.params != null) {
                message.params = data.params.map(item => ListSearchParams.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                size?: number;
                page?: number;
                params?: ReturnType<typeof ListSearchParams.prototype.toObject>[];
            } = {};
            if (this.size != null) {
                data.size = this.size;
            }
            if (this.page != null) {
                data.page = this.page;
            }
            if (this.params != null) {
                data.params = this.params.map((item: ListSearchParams) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.size != 0)
                writer.writeInt32(1, this.size);
            if (this.page != 0)
                writer.writeInt32(2, this.page);
            if (this.params.length)
                writer.writeRepeatedMessage(3, this.params, (item: ListSearchParams) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ListRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ListRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.size = reader.readInt32();
                        break;
                    case 2:
                        message.page = reader.readInt32();
                        break;
                    case 3:
                        reader.readMessage(message.params, () => pb_1.Message.addToRepeatedWrapperField(message, 3, ListSearchParams.deserialize(reader), ListSearchParams));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ListRequest {
            return ListRequest.deserialize(bytes);
        }
    }
    export class ListSearchParams extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            field?: string;
            operator?: string;
            value?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("field" in data && data.field != undefined) {
                    this.field = data.field;
                }
                if ("operator" in data && data.operator != undefined) {
                    this.operator = data.operator;
                }
                if ("value" in data && data.value != undefined) {
                    this.value = data.value;
                }
            }
        }
        get field() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set field(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get operator() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set operator(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get value() {
            return pb_1.Message.getFieldWithDefault(this, 3, []) as string[];
        }
        set value(value: string[]) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            field?: string;
            operator?: string;
            value?: string[];
        }): ListSearchParams {
            const message = new ListSearchParams({});
            if (data.field != null) {
                message.field = data.field;
            }
            if (data.operator != null) {
                message.operator = data.operator;
            }
            if (data.value != null) {
                message.value = data.value;
            }
            return message;
        }
        toObject() {
            const data: {
                field?: string;
                operator?: string;
                value?: string[];
            } = {};
            if (this.field != null) {
                data.field = this.field;
            }
            if (this.operator != null) {
                data.operator = this.operator;
            }
            if (this.value != null) {
                data.value = this.value;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.field.length)
                writer.writeString(1, this.field);
            if (this.operator.length)
                writer.writeString(2, this.operator);
            if (this.value.length)
                writer.writeRepeatedString(3, this.value);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ListSearchParams {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ListSearchParams();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.field = reader.readString();
                        break;
                    case 2:
                        message.operator = reader.readString();
                        break;
                    case 3:
                        pb_1.Message.addToRepeatedField(message, 3, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ListSearchParams {
            return ListSearchParams.deserialize(bytes);
        }
    }
    export class ExportResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            code?: string;
            ext?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("code" in data && data.code != undefined) {
                    this.code = data.code;
                }
                if ("ext" in data && data.ext != undefined) {
                    this.ext = data.ext;
                }
            }
        }
        get code() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set code(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get ext() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set ext(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            code?: string;
            ext?: string;
        }): ExportResponse {
            const message = new ExportResponse({});
            if (data.code != null) {
                message.code = data.code;
            }
            if (data.ext != null) {
                message.ext = data.ext;
            }
            return message;
        }
        toObject() {
            const data: {
                code?: string;
                ext?: string;
            } = {};
            if (this.code != null) {
                data.code = this.code;
            }
            if (this.ext != null) {
                data.ext = this.ext;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.code.length)
                writer.writeString(1, this.code);
            if (this.ext.length)
                writer.writeString(2, this.ext);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ExportResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ExportResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.code = reader.readString();
                        break;
                    case 2:
                        message.ext = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ExportResponse {
            return ExportResponse.deserialize(bytes);
        }
    }
}
