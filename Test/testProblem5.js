const { problem5 } = require("../problem5");
const { inventory } = require("../inventory");
const TWO_THOUSAND = 2000;

const olderCar = problem5(inventory, TWO_THOUSAND);
console.log("total number of older car is " + " " + olderCar.length);
console.log(olderCar);
