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
    <div className='text-white text-center border-2 rounded mx-auto my-auto p-4 w-max bg-green-900'>
      
      <header className='text-2xl font-bold py-4'>Ivan's Weather app</header>

      <div className="flex flex-col items-center bg-green-800 p-3 rounded">
        <SearchCity onSearch={handleSearch}/>
        {weather && (
          <WeatherData 
            city={weather.name}
            temp={weather.main.temp}
            forecast={weather.weather[0].main}
          />
        )}
      </div>

    </div>
  )
}
