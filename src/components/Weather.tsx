import React, { useEffect, useState } from "react"
import { WeatherApiResponse } from "../interfaces/OpenWeatherResponse"
import axios from "axios"
import {
  WiThunderstorm,
  WiRain,
  WiSandstorm,
  WiDaySunnyOvercast,
} from "react-icons/wi"
import {
  BsCloudRainHeavy,
  BsCloudSnow,
  BsFillCloudHazeFill,
  BsFillCloudHaze2Fill,
  BsFillSunFill,
  BsClouds,
} from "react-icons/bs"

type WeatherTypes = {
  savedCity: string | null
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
      })
      .catch((err) => {
        console.log("ERROR at Weather api: ", err.message)
      })
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  const getWeatherIcon = (value: string | null) => {
    switch (value) {
      case "Thunderstorm":
        return <WiThunderstorm />
      case "Drizzle":
        return <WiRain />
      case "Rain":
        return <BsCloudRainHeavy />
      case "Snow":
        return <BsCloudSnow />
      case "Mist":
        return <BsFillCloudHazeFill />
      case "Fog":
        return <BsFillCloudHaze2Fill />
      case "Sand":
        return <WiSandstorm />
      case "Clear":
        return <BsFillSunFill />
      case "Clouds":
        return <BsClouds />
      default:
        return <WiDaySunnyOvercast />
    }
  }

  return (
    <div className='weather'>
      <h4>{Math.floor(weatherData?.main.temp ?? 0)} &#8451;</h4>
      <h3>
        {weatherData?.name}
        <span>{getWeatherIcon(weatherData?.weather[0].main ?? "Clear")}</span>
      </h3>
    </div>
  )
}

export default Weather
