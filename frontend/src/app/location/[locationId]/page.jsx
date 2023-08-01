"use client";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Map, Weather, Travel } from "@/components";

export default function page({ params }) {
  const [locationData, setLocationData] = useState({});
  const locationId = params.locationId;

  const TODOSURL = "http://18.170.108.208:8082";

  const fetchLocationData = async () => {
    const responseData = await axios.get(`${TODOSURL}/cities/${locationId}`);
    const cityData = await responseData.data;
    return cityData;
  };

  useEffect(() => {
    const getData = async () => {
      setLocationData(await fetchLocationData());
    };
    getData();
  }, []);

  return (
    <div>
      <div className="text-center bg-eee border-1 px-10 py-5">
        <h1 className="text-2xl font-bold">{locationData.city_name}</h1>
      </div>
      {/* location image */}
      <div className="w-full">
        <div className="relative w-full">
          <img src={locationData.city_url} className="w-full" />
        </div>
        <div className="p-5 border-5">{locationData.city_description}</div>
      </div>
      <div className="p-5">
        {locationData.longitude && locationData.latitude ? (
          <Map cityCoords={[locationData.longitude, locationData.latitude]} />
        ) : (
          <p>Loading map...</p>
        )}
      </div>
      <div>
      {locationData.longitude && locationData.latitude ? (
          <Weather longitude={locationData.longitude} latitude={locationData.latitude} />
        ) : 
        <p>Loading weather...</p>
      }
      </div>

      <div>
        <Travel />
      </div>
    </div>
  );
}
