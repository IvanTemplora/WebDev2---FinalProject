"use client";

import { use, useState } from 'react'
import SearchCity from './Components/search-city';
import WeatherData from './Components/weather-data';

const api = {
  key: "a1cbff707be4edcb35cb530eb679456d",
  baseURL: "https://api.openweathermap.org/data/2.5/",
};

export default function Home() {

  const [weather, setWeather] = useState(null);

  const handleSearch = (city) => {
    fetch(`${api.baseURL}weather?q=${city}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then((result) => {
      console.log(result);
      setWeather(result);
    })
  }

  return (
    <div className='text-white'>
      
      <header>Weather app</header>
      <SearchCity onSearch={handleSearch}/>
      {weather && (
        <WeatherData 
          city={weather.name}
          temp={weather.main.temp}
          forecast={weather.weather[0].main}
        />
      )}

    </div>
  )
}
