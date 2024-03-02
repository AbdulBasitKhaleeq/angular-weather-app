// Interface representing the overall structure of weather data
export interface WeatherData {
  coord: Coord // Coordinates of the location
  weather: Weather[] // Array of weather conditions
  base: string // Data source
  main: Main // Main weather parameters
  visibility: number // Visibility in meters
  wind: Wind // Wind information
  clouds: Clouds // Cloud information
  dt: number // Time of data calculation
  sys: Sys // System information
  timezone: number // Timezone offset in seconds
  id: number // City ID
  name: string // City name
  cod: number // HTTP response code
}

// Interface representing the coordinates of a location
export interface Coord {
  lon: number // Longitude
  lat: number // Latitude
}

// Interface representing a weather condition
export interface Weather {
  id: number // Weather condition ID
  main: string // Main weather group (e.g., Clear, Rain)
  description: string // Weather condition description
  icon: string // Weather icon code
}

// Interface representing main weather parameters
export interface Main {
  temp: number // Temperature
  feels_like: number // "Feels like" temperature
  temp_min: number // Minimum temperature
  temp_max: number // Maximum temperature
  pressure: number // Atmospheric pressure
  humidity: number // Humidity percentage
}

// Interface representing wind information
export interface Wind {
  speed: number // Wind speed
  deg: number // Wind direction in degrees
  gust: number // Wind gust speed
}

// Interface representing cloud information
export interface Clouds {
  all: number // Cloudiness percentage
}

// Interface representing system information
export interface Sys {
  type: number // System type
  id: number // System ID
  country: string // Country code
  sunrise: number // Sunrise time
  sunset: number // Sunset time
}
