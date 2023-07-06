import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../services/weather.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"],
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  city: string = "London"; // Default city is London

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe((data: any) => {
      this.weatherData = data;
    });
  }

  search(city: string) {
    this.city = city;
    this.getWeather();
  }
}
