const { problem5 } = require(".././problem5");
const { inventory } = require(".././inventory");

const olderCar = problem5(inventory);
console.log("total number of older car is " + " " + olderCar.length);
console.log(olderCar);
