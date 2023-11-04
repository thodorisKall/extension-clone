export interface WeatherApiResponse {
  coord: Coordinates
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: System
  timezone: number
  id: number
  name: string
  cod: number
}

export interface Coordinates {
  lon: number
  lat: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

export interface Wind {
  speed: number
  deg: number
}

export interface Clouds {
  all: number
}

export interface System {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}
