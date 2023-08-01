"use client";
import React from "react";
import { useState, useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import formatAirportName from "@/utils/helpers/formatAirportName";

function Travel({ latitude, longitude }) {
  //DATE PICKER for arrival and departure date
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const [airportData, setAirportData] = useState(null);

  const Amadeus = require("amadeus");
  const amadeus = new Amadeus({
    clientId: API_KEY,
    clientSecret: API_SECRET,
  });

  const getAirportData = async () => {
    try {
      const response = await amadeus.referenceData.locations.airports.get({
        longitude: longitude,
        latitude: latitude,
        radius: 100,
      });
      const data = await response.data;
      return data;
    } catch (error) {
      console.error("Error fetching airport data:", error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      setAirportData(await getAirportData());
    };
    getData();
  }, []);

  const [departAirport, setDepartAirport] = useState("");
  const [arriveAirport, setArriveAirport] = useState("");
  const [noAdults, setNoAdults] = useState(0);
  const [noChildren, setNoChildren] = useState(0);

  return (
    <div>
      <div className="py-5 bg-slate-100 md:px-10 md:py-10 ">
        <section className="mt-5 mb-5 ">
          <div className="mr-3 ml-3 flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 md:pr-10">
              <h2 className="mb-4 text-3xl text-black md:text-4xl lg:text-5xl">
                Ready to fly?
              </h2>
              <p className="text-black mb-2 mt-2">Input your flight details</p>
            </div>
            <div className="md:w-1/2">
              <form id="form-container" className="items-center">
                <div className="inline relative w-64">
                  <select
                    onChange={(e) => setDepartAirport(e.target.value)}
                    value={departAirport}
                    className="block mb-4 appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select a departure airport</option>
                    <option value="LHR">London Heathrow Airport</option>
                    <option value="MAN">Manchester Airport</option>
                    <option value="STN">London Stansted Airport</option>
                    <option value="BHX">Birmingham Airport</option>
                    <option value="EDI">Edinburgh Airport</option>
                    <option value="GLA">Glasgow Airport</option>
                    <option value="BRS">Bristol Airport</option>
                    <option value="NCL">Newcastle Airport</option>
                    <option value="LBA">Leeds Bradford Airport</option>
                    <option value="EMA">East Midlands Airport</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <div className="inline relative w-64 mb-4 mt-4">
                  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option
                      onChange={(e) => setArriveAirport(e.target.value)}
                      value={arriveAirport}
                    >
                      Select an arrival airport
                    </option>
                    {airportData ? (
                      airportData.map((airport) => {
                        return (
                          <option
                            value={airport.iataCode}
                            key={airport.iataCode}
                          >
                            {formatAirportName(airport.name)}
                          </option>
                        );
                      })
                    ) : (
                      <option>Loading...</option>
                    )}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <p className="mt-4">
                  Please select arrival and departure dates
                </p>
                <Datepicker value={value} onChange={handleValueChange} />
                <label className="mb-4">Adults:</label>
                <input
                  id="adult"
                  name="Adult"
                  value={noAdults}
                  onChange={(e) => setNoAdults(e.target.value)}
                  min={0}
                  max={9 - noChildren}
                  step={1}
                  type="number"
                  className="w-full border py-2 px-2 mb-5 bg-transparent "
                ></input>
                <label className="mb-4">Children (0-11):</label>
                <input
                  id="children"
                  name="children"
                  value={noChildren}
                  min={0}
                  max={9 - noAdults}
                  step={1}
                  onChange={(e) => setNoChildren(e.target.value)}
                  type="number"
                  className="w-full py-2 border px-2 mb-2 bg-transparent "
                ></input>

                <button
                  className="text-black mt-2 items-center border-4 px-10 py-2 md:px-20 md:ml-0 "
                  placeholder="submit"
                  name="submit"
                  title="submit"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Travel;
