"use client";

import { use, useState } from "react";

export default function SearchCity(){

    const [city, setCity] = useState('');

    return(
        <div>
            <input
                type='text'
                placeholder="Enter City Name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={getWeather}>Get Weather</button>
        </div>
    )
}

