import React from "react";

function Travel() {
  return (
    <div>
      <div className="py-10 md:px-10 md:py-10 ">
        <section className="mt-5 mb-5 ">
          <div className="mr-3 ml-3 flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 md:pr-10">
              <h2 className=" text-3xl text-black md:text-4xl lg:text-5xl">
                Ready to fly?
              </h2>
              <p className="text-black mb-2 mt-2">Input your flight details</p>
            </div>
            <div className="md:w-1/2">
              <form id="form-container">
                <input
                  id="departure_location"
                  name="Departure Location"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  placeholder="Departure Location"
                  type="text"
                  className="w-full mb-5 py-2 bg-transparent "
                ></input>
                <input
                  id="arrival_location"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  name="arrival_location"
                  placeholder="Arrival Location"
                  type="text"
                  className="w-full py-2 mb-5 bg-transparent "
                ></input>
                <input
                  id="departure_date"
                  name="Departure Date"
                  // value={phone}
                  // onChange={(e) => setPhone(e.target.value)}
                  placeholder="Departure Date"
                  type="text"
                  className="w-full py-2 mb-5 bg-transparent "
                ></input>
                <div class="inline relative w-64">
                  <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option>Select a departure airport</option>
                    <option>
                      London Heathrow Airport
                    </option>
                    <option>Manchester Airport</option>
                    <option>London Stansted Airport</option>
                    <option>Birmingham Airport</option>
                    <option>London Stansted Airport</option>
                    <option>Edinburgh Airport</option>
                    <option>Glasgow Airport</option>
                    <option>Bristol Airport</option>
                    <option>Newcastle Airport</option>
                   


                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>

                <button
                  className="text-black mt-5 ml-5 items-center border-4 px-10 md:px-20 md:ml-0 "
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
