import React, { useEffect, useState } from "react"
import { WeatherApiResponse } from "../interfaces/OpenWeatherResponse"
import axios from "axios"

type WeatherTypes = {
  savedCity: string
}

const Weather = ({ savedCity }: WeatherTypes) => {
  const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(
    null
  )
  const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${savedCity}&appid=cdae50bde18e7f347886422012156661&units=metric`

  const fetchWeather = () => {
    axios
      .get<WeatherApiResponse>(weatherApi)
      .then((res) => {
        setWeatherData(res.data)
        console.log("WEATHER data: ", res.data)
      })
      .catch((err) => {
        console.log("ERROR at Weather api: ", err.message)
      })
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  return (
    <div className='weather'>
      <h4>{weatherData?.main.temp} &#8451;</h4>
      <h4>{weatherData?.name}</h4>
    </div>
  )
}

export default Weather
