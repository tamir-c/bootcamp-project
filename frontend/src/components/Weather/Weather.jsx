"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// const Weather = () => {
//     return <div className="h-10 w-100 border-4 border-solid">
//         Weather placeholder
//     </div>
// }

// export default Weather;


function Weather ({latitude, longitude}) {

    const API_KEY = 'c886024dcc204a23e218e3b548d03062'

    const [weatherData, setWeatherData] = useState(null);


    const getWeatherData = async () => {
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&units=metric&appid=${API_KEY}`);
          const data = await response.data
        //    console.log(data.daily)
       
          return data.daily
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };

    useEffect(() => {
        const getData = async () => {
            setWeatherData(await getWeatherData());
        }
        getData();
      }, []);


    return (
      <div className="border-4 border-solid">
        <h1>5-Day Weather Forecast</h1>
        <div>
            {weatherData ? (
                weatherData.map((item) => (
                    <div key={item.dt}>
                        <p>Date/Time: {new Date(item.dt * 1000).toLocaleString()}</p>
                        <p>Temperature: {item.temp.day} °C</p>
                        <p>Description: {item.weather[0].description}</p>
                        <img
                            src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                            alt={item.weather[0].description}
                        />
                    </div>
                ))
            ) : (
                <p> Loading...</p>
            )}
        </div>
    </div>
    )
}

export default Weather;