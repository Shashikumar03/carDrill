const { inventory } = require("../inventory");
const { problem2 } = require("../problem2");

const lastCarDetails = problem2(inventory);

console.log(
  `last car is ${lastCarDetails.car_make} ${lastCarDetails.car_model}`
);
