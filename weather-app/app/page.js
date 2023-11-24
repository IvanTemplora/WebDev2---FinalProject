"use client";

import { use, useState } from 'react'

const api = {
  key: "a1cbff707be4edcb35cb530eb679456d",
  baseURL: "https://api.openweathermap.org/data/2.5/",
};

export default function Home() {

  const [city, setCity] = useState("");

  const handleSearch = () => {
    fetch(`${api.baseURL}weather?q=${city}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then((result) => {
      console.log(result);
    })
  }

  return (
    <div className='text-white'>
      {/* header */}
      <header>Weather app</header>

      {/* search box */}
      <div>
        <input
          type='text'
          placeholder='Enter City Name'
          onChange={(e) => setCity(e.target.value)}
          className='text-black'
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* weather info */}
      <p>New york</p>
      <p>10 °C</p>
      <p>Cloudy</p>

    </div>
  )
}
