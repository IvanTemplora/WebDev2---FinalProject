"use client";

import { use, useState } from "react";
import { handleClientScriptLoad } from "next/script";

export default function SearchCity({onSearch}){

    const [city, setCity] = useState('');

    const handleSearch = () => {
        onSearch(city);
    }

    return(
        <div>
            <input
                type='text'
                placeholder="Enter City Name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="text-black"
            />
            <button onClick={handleSearch}>Get Weather</button>
        </div>
    )
}

