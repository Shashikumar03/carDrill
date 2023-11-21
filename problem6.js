const inventoryObj = require("./inventory");
const inventory = inventoryObj.inventory;
const BMW = "BMW";
const AUDI = "Audi";

// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
const BMWAndAudi = [];
for (let i = 0; i < inventory.length; i++){
    if (inventory[i].car_make === BMW || inventory[i].car_make == AUDI) {
        BMWAndAudi.push(inventory[i]);
     }
}
module.exports = { BMWAndAudi };