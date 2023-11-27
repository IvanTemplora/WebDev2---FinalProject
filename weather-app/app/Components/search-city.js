"use client";

import { use, useState } from "react";
import fetchData from "./fetch-data";
import { handleClientScriptLoad } from "next/script";

export default function SearchCity(){

    const [city, setCity] = useState('');

    handleOnCityChange = (e) => {
        setCity(e.target.value);
        fetchData(e);
    }

    return(
        <div>
            <input
                type='text'
                placeholder="Enter City Name"
                value={city}
                onChange={handleOnCityChange(city)}
            />
            <button onClick={getWeather}>Get Weather</button>
        </div>
    )
}

