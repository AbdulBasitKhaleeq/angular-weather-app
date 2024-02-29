import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

  }
  cityName: string = 'wellington';
  weatherData?: WeatherData;
  ngOnInit(): void {
    this.getData(this.cityName);
    this.cityName = '';
  }

  submit() {
    this.getData(this.cityName);
    this.cityName = '';
  }

  private getData(name: string) {
    this.weatherService.getWeatherData(name).subscribe({
      next: (res) => {
        this.weatherData = res;
        console.log(res);
      }
    })
  }
}
