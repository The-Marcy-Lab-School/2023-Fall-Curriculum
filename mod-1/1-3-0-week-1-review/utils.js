// helper functions are used by other functions
// get (read) vs. set (write)
const getRandomIntInRange = (min, max) => {
  const difference = max - min;
  return Math.floor(Math.random() * (difference)) + min; // 0 -> X.999999
}

const PI = 3.14159

console.log('hi mohamed');

module.exports = {
  getRandomIntInRange,
  PI,
}
