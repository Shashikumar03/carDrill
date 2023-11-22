const { inventory } = require("../inventory");
const { problem1 } = require("../problem1");
const a = problem1(inventory);

console.log(`car with id: ${a.id} ${a.car_year} ${a.car_make} ${a.car_model}`);
