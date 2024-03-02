// Importing necessary Angular modules and types for HTTP operations
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

// Injectable decorator to indicate that this service can be injected into other components or services
@Injectable({
  providedIn: 'root' // Specifying that this service should be available at the root level
})
export class WeatherService {

  constructor(private http: HttpClient) { } // Injecting the HttpClient service into the WeatherService

  // Method to fetch weather data for a given city
  getWeatherData(cityName: string): Observable<WeatherData>{
    // Making an HTTP GET request to the weather API endpoint with the specified headers
    return this.http.get<WeatherData>(`${environment.weatherApiBaseUrl}/city/${cityName}`, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue)
    });
  }

}
