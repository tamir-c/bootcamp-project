// // config.js
// require("dotenv").config();
// // Export env variables

// const amadeus = require("amadeus");

// module.exports = new Amadeus({
//     clientId: API_KEY,
//     clientSecret: API_SECRET,
//   });

  // config.js
const dotenv = require("dotenv");
dotenv.config();

console.log(AMADEUS_API_KEY)
// Export env variables
module.exports = {
  API_KEY: process.env.AMADEUS_API_KEY,
  API_SECRET: process.env.AMADEUS_API_SECRET,
};