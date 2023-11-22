const { inventory } = require(".././inventory");
const { problem1 } = require(".././problem1");
const ID = 33;

const carDetail = problem1(inventory, ID);

console.log(
  `car with id: ${carDetail.id} ${carDetail.car_year} ${carDetail.car_make} ${carDetail.car_model}`
);
