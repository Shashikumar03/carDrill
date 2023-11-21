const carData = require("./inventory");

// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

const carDetails = carData.inventory;
const carModel = [];
for (let i = 0; i < carDetails.length; i++) {
  carModel.push(carDetails[i].car_model);
}

carModel.sort();
module.exports = { carModel };
