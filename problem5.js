const { problem4 } = require("./problem4");
const { inventory } = require("./inventory");
const TWO_THOUSAND = 2000;

// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
const carYear = problem4(inventory);

function problem5(inventory) {
  const olderCar = [];
  for (let i = 0; i < carYear.length; i++) {
    if (carYear[i] < TWO_THOUSAND) {
      olderCar.push(inventory[i]);
    }
  }
  return olderCar;
}
module.exports = { problem5 };
