const { problem5 } = require("../problem5");
const { problem4 } = require("../problem4");
const { inventory } = require("../inventory");
const TWO_THOUSAND = 2000;
const carYear = problem4(inventory);

const olderCar = problem5(inventory, carYear, TWO_THOUSAND);
console.log("total number of older car is " + " " + olderCar.length);
console.log(olderCar);
