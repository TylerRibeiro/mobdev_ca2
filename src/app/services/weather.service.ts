import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  private apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=15261dc6f683720baa3e20e83d363fc3";

  constructor(private http: HttpClient) {}

  getWeather(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
