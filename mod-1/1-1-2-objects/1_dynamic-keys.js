const prompt = require('prompt-sync')({ sigint: true });

const dynamicKey = 'price';
const car = {
  name: 'Corolla',
  maker: 'Toyota',
  // [dynamicKey]: 27000, // dynamic key in literal view (a bit rarer)
};
car[dynamicKey] = 27000;

console.log(car.price); // 27000

// example where dynamic keys are useful
const nameCarProperty = (car) => {
  const property = prompt("Name the property!");
  console.log(car[property]);
}

nameCarProperty(car);