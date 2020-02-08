import { Component } from "@angular/core";
import { WeatherForecast } from "../proto/weather_pb";
import { WeatherForecastsClient } from "../proto/weather_pb_service";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

@Component({
  selector: "app-fetch-data",
  templateUrl: "./fetch-data.component.html"
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  private client: WeatherForecastsClient;
  constructor() {
    this.client = new WeatherForecastsClient("https://localhost:5001");
    this.client.getWeather(new Empty(), (error, reply) => {
      if (error) {
        console.error(error);
      }

      this.forecasts = reply.getForecastsList();
    });
  }
}
