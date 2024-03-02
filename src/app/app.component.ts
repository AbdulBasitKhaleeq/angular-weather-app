// Import necessary Angular modules and components
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

// Decorator to define the component metadata
@Component({
  selector: 'app-root', // Component selector
  templateUrl: './app.component.html', // HTML template file
  styleUrls: ['./app.component.css'] // CSS styles for the component
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

  }

  // Initialize default city name and weather data
  cityName: string = 'wellington';
  weatherData?: WeatherData;

  // Lifecycle hook, called after the component is initialized
  ngOnInit(): void {
    this.getData(this.cityName); // Fetch initial weather data
    this.cityName = ''; // Clear the city name after fetching data
  }

  // Function to handle form submission and fetch weather data
  submit() {
    this.getData(this.cityName); // Fetch weather data on form submission
    this.cityName = ''; // Clear the city name after fetching data
  }

  // Private method to fetch weather data from the WeatherService
  private getData(name: string) {
    this.weatherService.getWeatherData(name).subscribe({
      next: (res) => {
        this.weatherData = res; // Assign the received weather data
        console.log(res); // Log the response for debugging
      }
    });
  }
}
