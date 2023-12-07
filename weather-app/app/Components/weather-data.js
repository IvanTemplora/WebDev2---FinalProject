"use client";

import { use, useState } from "react";

export default function WeatherData({city, temp, forecast}) {
    return(
        <div className="text-center">
            <p className="text-2xl font-bold">{city}</p>
            <p className="text-2xl" >{temp} °C</p>
            <p>{forecast}</p>
        </div>
    )
}