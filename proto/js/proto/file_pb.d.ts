import * as jspb from 'google-protobuf'



export class FileInfoRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): FileInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FileInfoRequest): FileInfoRequest.AsObject;
  static serializeBinaryToWriter(message: FileInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileInfoRequest;
  static deserializeBinaryFromReader(message: FileInfoRequest, reader: jspb.BinaryReader): FileInfoRequest;
}

export namespace FileInfoRequest {
  export type AsObject = {
    code: string,
  }
}

export class FileInfo extends jspb.Message {
  getCode(): string;
  setCode(value: string): FileInfo;

  getStatus(): number;
  setStatus(value: number): FileInfo;

  getPath(): string;
  setPath(value: string): FileInfo;

  getFilename(): string;
  setFilename(value: string): FileInfo;

  getFullname(): string;
  setFullname(value: string): FileInfo;

  getExt(): string;
  setExt(value: string): FileInfo;

  getSize(): number;
  setSize(value: number): FileInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FileInfo): FileInfo.AsObject;
  static serializeBinaryToWriter(message: FileInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileInfo;
  static deserializeBinaryFromReader(message: FileInfo, reader: jspb.BinaryReader): FileInfo;
}

export namespace FileInfo {
  export type AsObject = {
    code: string,
    status: number,
    path: string,
    filename: string,
    fullname: string,
    ext: string,
    size: number,
  }
}

export class DownloadFileRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): DownloadFileRequest;

  getStart(): number;
  setStart(value: number): DownloadFileRequest;

  getEnd(): number;
  setEnd(value: number): DownloadFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadFileRequest): DownloadFileRequest.AsObject;
  static serializeBinaryToWriter(message: DownloadFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadFileRequest;
  static deserializeBinaryFromReader(message: DownloadFileRequest, reader: jspb.BinaryReader): DownloadFileRequest;
}

export namespace DownloadFileRequest {
  export type AsObject = {
    code: string,
    start: number,
    end: number,
  }
}

export class Chunk extends jspb.Message {
  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): Chunk;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chunk.AsObject;
  static toObject(includeInstance: boolean, msg: Chunk): Chunk.AsObject;
  static serializeBinaryToWriter(message: Chunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chunk;
  static deserializeBinaryFromReader(message: Chunk, reader: jspb.BinaryReader): Chunk;
}

export namespace Chunk {
  export type AsObject = {
    content: Uint8Array | string,
  }
}

