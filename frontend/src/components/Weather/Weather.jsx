"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { WeatherCard } from "..";

// const Weather = () => {
//     return <div className="h-10 w-100 border-4 border-solid">
//         Weather placeholder
//     </div>
// }

// export default Weather;

function Weather({ latitude, longitude }) {
  const API_KEY = "c886024dcc204a23e218e3b548d03062";

  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&units=metric&appid=${API_KEY}`
      );
      const data = await response.data;
         console.log(data.daily)

      return data.daily;
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      setWeatherData(await getWeatherData());
    };
    getData();
  }, []);

  return (
      <ul className="flex overflow-auto p-2 pl-0 m-4">
        {weatherData ? (
          weatherData.map((item) => (
              <WeatherCard dayData={item} key={item.dt}/>
          ))
        ) : (
          <p> Loading...</p>
        )}
      </ul>
  );
}

export default Weather;
