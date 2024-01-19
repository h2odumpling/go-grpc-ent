import * as jspb from 'google-protobuf'



export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class DeleteRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteMultiRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteMultiRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMultiRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMultiRequest): DeleteMultiRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteMultiRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMultiRequest;
  static deserializeBinaryFromReader(message: DeleteMultiRequest, reader: jspb.BinaryReader): DeleteMultiRequest;
}

export namespace DeleteMultiRequest {
  export type AsObject = {
    id: number,
  }
}

export class ListRequest extends jspb.Message {
  getSize(): number;
  setSize(value: number): ListRequest;

  getPage(): number;
  setPage(value: number): ListRequest;

  getParamsList(): Array<ListSearchParams>;
  setParamsList(value: Array<ListSearchParams>): ListRequest;
  clearParamsList(): ListRequest;
  addParams(value?: ListSearchParams, index?: number): ListSearchParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
    size: number,
    page: number,
    paramsList: Array<ListSearchParams.AsObject>,
  }
}

export class ListSearchParams extends jspb.Message {
  getField(): string;
  setField(value: string): ListSearchParams;

  getOperator(): string;
  setOperator(value: string): ListSearchParams;

  getValueList(): Array<string>;
  setValueList(value: Array<string>): ListSearchParams;
  clearValueList(): ListSearchParams;
  addValue(value: string, index?: number): ListSearchParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSearchParams.AsObject;
  static toObject(includeInstance: boolean, msg: ListSearchParams): ListSearchParams.AsObject;
  static serializeBinaryToWriter(message: ListSearchParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSearchParams;
  static deserializeBinaryFromReader(message: ListSearchParams, reader: jspb.BinaryReader): ListSearchParams;
}

export namespace ListSearchParams {
  export type AsObject = {
    field: string,
    operator: string,
    valueList: Array<string>,
  }
}

export class ExportResponse extends jspb.Message {
  getCode(): string;
  setCode(value: string): ExportResponse;

  getExt(): string;
  setExt(value: string): ExportResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExportResponse): ExportResponse.AsObject;
  static serializeBinaryToWriter(message: ExportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportResponse;
  static deserializeBinaryFromReader(message: ExportResponse, reader: jspb.BinaryReader): ExportResponse;
}

export namespace ExportResponse {
  export type AsObject = {
    code: string,
    ext: string,
  }
}

