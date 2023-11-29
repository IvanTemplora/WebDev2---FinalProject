"use client";

import { use, useState } from "react";
import fetchData from "./fetch-data";
import { handleClientScriptLoad } from "next/script";

export default function SearchCity({onSearch}){

    const [city, setCity] = useState('');

    handleOnCityChange = (e) => {
        setCity(e.target.value);
    }

    handleSearch = () => {
        onSearch(city);
    }

    return(
        <div>
            <input
                type='text'
                placeholder="Enter City Name"
                value={city}
                onChange={handleOnCityChange(city)}
            />
            <button onClick={handleSearch}>Get Weather</button>
        </div>
    )
}

