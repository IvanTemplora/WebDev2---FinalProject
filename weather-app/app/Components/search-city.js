"use client";

import { use, useState } from "react";
import { handleClientScriptLoad } from "next/script";

export default function SearchCity({onSearch}){

    const [city, setCity] = useState('');

    const handleSearch = () => {
        onSearch(city);
    }

    return(
        <div className="flex items-center mb-4">
            <input
                type='text'
                placeholder="Enter City Name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="text-black border-2 rounded px-2 py-1 mr-2"
            />
            <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">Get Weather</button>
        </div>
    )
}

