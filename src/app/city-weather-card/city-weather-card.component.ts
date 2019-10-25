import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-weather-card',
  templateUrl: './city-weather-card.component.html',
  styleUrls: ['./city-weather-card.component.scss']
})
export class CityWeatherCardComponent implements OnInit {
  weatherType = 'cloudy';
  minTemp: any = 10;
  maxTemp: any = 19;

  constructor() { }

  ngOnInit() {
  }

}
