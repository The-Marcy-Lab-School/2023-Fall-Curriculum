Math.round(2.5); // 3
Math.floor(2.99); // 2
Math.ceil(2.01); // 3

console.log(2 ** 3); // 8

const getRandomInt = (max) => Math.floor(Math.random() * max);

const isOdd = (num) => num % 2;

console.log(getRandomInt(3)); // 0, 1 or 2

console.log(getRandomInt(1)); // always 0

console.log(Math.random()); // float 0 to <1
