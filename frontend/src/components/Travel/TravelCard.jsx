import React from "react";

const TravelCard = ({flight, dictionary}) => {
  const departTime = new Date(flight.itineraries[0].segments[0].departure.at + "Z")
  const arriveTime = new Date(flight.itineraries[0].segments[0].arrival.at + "Z")
  const stops = flight.itineraries[0].segments.length - 1

  return (
    <div className="p-10 flex justify-center">
      <div className="max-w-3xl">
        <div className="bg-white p-6 rounded-lg shadow-lg flex mb-4 place-items-center">
          <div className="w-1/2">
            <h2 className="font-bold mb-2">Departure Location: {flight.itineraries[0].segments[0].departure.iataCode}</h2>
            <h2 className="font-bold mb-2">Arrival Location: {flight.itineraries[0].segments[stops].arrival.iataCode}</h2>
            <h2 className="font-bold mb-2">Flight Airline: {dictionary.carriers[flight.itineraries[0].segments[0].carrierCode]}</h2>
          </div>
          <div className="w-1/2">
            <h2 className="font-bold mb-2">Departure Time: {departTime.toLocaleString()}</h2>
            <h2 className="font-bold mb-2">Arrival Time: {arriveTime.toLocaleString()}</h2>
            <h2 className="font-bold mb-2">Duration: {flight.itineraries[0].duration}</h2>
            <h2 className="font-bold mb-2">Stops: {stops}</h2>
            <h3 className="text-gray-700">Price: £{flight.price.total}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
