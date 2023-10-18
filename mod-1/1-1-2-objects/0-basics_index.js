// Create object use literal notation
const car = {
  name: 'Camry',
  maker: 'Toyota',
};

// add key/value pairs
car.color = 'blue'; // dot notation
car['model-year'] = 2018; // bracket notation

// access values
console.log(car.color); // blue
console.log(car['model-year']); // 2018

// update values
car.color = 'red';
console.log(car.color); // red

// delete values
delete car.color;
delete car['model-year'];

// if a value doesn't exist, it's undefined
console.log(car.color); // undefined
console.log(car['model-year']); // undefined
