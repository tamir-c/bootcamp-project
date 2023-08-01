import React from "react";

const TravelCard = () => {
  return (
    <div className="p-10 flex justify-center">
      <div className="max-w-3xl">
        <h1 className="mb-4 text-center font-bold">Flight Details</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg flex mb-4 place-items-center">
          <div className="w-1/2">
            <h2 className="font-bold mb-2">Departure Location: LHR</h2>
            <h2 className="font-bold mb-2">Arrival Location: LAX</h2>
            <h2 className="font-bold mb-2">Flight Airline: BA</h2>
          </div>
          <div className="w-1/2">
            <h2 className="font-bold mb-2">Departure Time: 14:00</h2>
            <h2 className="font-bold mb-2">Arrival Time: 01:24 Duration</h2>
            <h3 className="text-gray-700">Price: £400</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
