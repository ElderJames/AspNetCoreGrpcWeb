// package: WeatherForecast
// file: weather.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class WeatherReply extends jspb.Message {
  clearForecastsList(): void;
  getForecastsList(): Array<WeatherForecast>;
  setForecastsList(value: Array<WeatherForecast>): void;
  addForecasts(value?: WeatherForecast, index?: number): WeatherForecast;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeatherReply.AsObject;
  static toObject(includeInstance: boolean, msg: WeatherReply): WeatherReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WeatherReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeatherReply;
  static deserializeBinaryFromReader(message: WeatherReply, reader: jspb.BinaryReader): WeatherReply;
}

export namespace WeatherReply {
  export type AsObject = {
    forecastsList: Array<WeatherForecast.AsObject>,
  }
}

export class WeatherForecast extends jspb.Message {
  hasDatetimestamp(): boolean;
  clearDatetimestamp(): void;
  getDatetimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDatetimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTemperaturec(): number;
  setTemperaturec(value: number): void;

  getTemperaturef(): number;
  setTemperaturef(value: number): void;

  getSummary(): string;
  setSummary(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeatherForecast.AsObject;
  static toObject(includeInstance: boolean, msg: WeatherForecast): WeatherForecast.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WeatherForecast, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeatherForecast;
  static deserializeBinaryFromReader(message: WeatherForecast, reader: jspb.BinaryReader): WeatherForecast;
}

export namespace WeatherForecast {
  export type AsObject = {
    datetimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    temperaturec: number,
    temperaturef: number,
    summary: string,
  }
}

