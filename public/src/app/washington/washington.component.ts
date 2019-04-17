import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  weather: any;

  constructor(private _httpService: HttpService,
              private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
    });
    this.getWeather()
  }


  getWeather(){
    const city = "washington";
    let observable = this._httpService.getWeather(city);
    observable.subscribe(data => {

      console.log(data)
      console.log(data['data'])
      this.weather = data;

    });
  }

}
