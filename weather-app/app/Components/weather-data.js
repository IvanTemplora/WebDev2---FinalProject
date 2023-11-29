"use client";

import { use, useState } from "react";

export default function WeatherData({city, temp, forecast}) {
    return(
        <div>
            <p>{city}</p>
            <p>{temp}</p>
            <p>{forecast}</p>
        </div>
    )
}