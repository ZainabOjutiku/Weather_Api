import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
   apikey= "10834ffafc315d108d9a6006f5ce2eb2";

  constructor(private _http: HttpClient) {
  }

  getWeather(city: String) {
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apikey}`)
  }
}
