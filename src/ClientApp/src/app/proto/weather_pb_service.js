// package: WeatherForecast
// file: weather.proto

var weather_pb = require("./weather_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WeatherForecasts = (function () {
  function WeatherForecasts() {}
  WeatherForecasts.serviceName = "WeatherForecast.WeatherForecasts";
  return WeatherForecasts;
}());

WeatherForecasts.GetWeather = {
  methodName: "GetWeather",
  service: WeatherForecasts,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: weather_pb.WeatherReply
};

exports.WeatherForecasts = WeatherForecasts;

function WeatherForecastsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

WeatherForecastsClient.prototype.getWeather = function getWeather(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WeatherForecasts.GetWeather, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.WeatherForecastsClient = WeatherForecastsClient;

