const carData = require("./inventory");

// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

const carArray = carData.inventory;
const carYear = [];
for (let i = 0; i < carArray.length; i++){
    carYear.push(carArray[i].car_year);
}

module.exports = { carYear };