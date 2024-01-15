
export interface Forecast {
  cod: string,
  message: number,
  cnt: number,
  list: WeatherForecast[],
  city: City
}
export type ForecastDictionary<T> = Record<string, T>;
export interface WeatherForecast {
  dt: number,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number
  },
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ],
  clouds: {
    all: number,
  },
  snow?: {
    '3h': number
  },
  rain?:{
    '3h': number
  }
  wind: {
    speed: number,
    deg: number,
    gust: number,
  }
  visibility: number,
  sys: {
    pod: string
  },
  dt_txt: string
}

export interface City {
  id: number,
  name: string,
  coord: {
    lat: number,
    lon: number
  },
  county: string,
  population: number,
  timezone: number,
  sunrise: number,
  sunset: number
}

