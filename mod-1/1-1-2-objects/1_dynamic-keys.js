/* 
When the key name of a property is not known until 
you run the program, we can add "dynamic" properties 
using bracket notation (we can't use dot notation)
*/

const prompt = require("prompt-sync")({ sigint: true });

const car = {
  name: "Corolla",
  maker: "Toyota",
};

console.log("Add a property to the car!");
const property = prompt("Name the property!");
const value = prompt("Add a value!");
car[property] = value;

console.log("your car now has these properties:");
console.log(car);