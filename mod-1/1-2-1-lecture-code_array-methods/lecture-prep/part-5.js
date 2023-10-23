/** filter  */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = numbers.filter((num) => !(num % 2));
console.log('evenNumbers', evenNumbers);
// evenNumbers [ 2, 4, 6, 8 ]

const greaterThan100 = numbers.filter((num) => num > 100);
console.log('greaterThan100', greaterThan100);
// greaterThan100 []