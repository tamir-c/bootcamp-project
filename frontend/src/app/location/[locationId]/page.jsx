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
    <div className="">
      <div className="text-center bg-eee border-1 px-5 py-5">
        <h1 className="text-3xl font-bold">{locationData.city_name}</h1>
      </div>
      <div className="md:m-4"> 
      <div className="lg:grid lg:grid-cols-2 p-4">
        
          {/* location image */}
          <div className="justify-center w-full p-5">
            <div className="relative shadow-xl">
              <img src={locationData.city_url} className="rounded w-full" />
            </div>
          </div>
       
        <div className="bg-base-300 rounded-lg shadow-xl p-5 text-center place-items-center">
          <div className="flex items-center flex-wrap justify-center">
            <div className="p-5 border-5">{locationData.city_description}</div>
            {locationData.longitude && locationData.latitude ? (
              <div className="grow">
              <Weather
                longitude={locationData.longitude}
                latitude={locationData.latitude}
              />
              </div>
            ) : (
              <p>Loading weather...</p>
            )}
          </div>
        </div>
      </div>

      </div>
      
      <div>
        {locationData.longitude && locationData.latitude ? (
          <Travel
            latitude={locationData.latitude}
            longitude={locationData.longitude}
          />
        ) : (
          <p>Loading travel info...</p>
        )}
      </div>
      <div className="md:p-2"> 

         <div className="h-96">
        {locationData.longitude && locationData.latitude ? (
          <Map cityCoords={[locationData.longitude, locationData.latitude]} />
        ) : (
          <p>Loading map...</p>
        )}
      </div>
      </div>
     
    </div>
  );
}
