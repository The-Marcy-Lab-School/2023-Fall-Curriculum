/** Part 2: forEach  */

const letters = ['a', 'b', 'c'];
const callback = (val, idx, arr) => {
  console.log('Value at index:', val);
  console.log('Current index:', idx);
  console.log('Original array:', arr);
};

letters.forEach(callback);



/** Part 3: map */

// const numbers = [10, 20, 30];

// const bigNumbers = numbers.map((val, idx, arr) => {
//   console.log('cb: val, idx, arr', val, idx, arr);

//   return val * 100;
// });

// console.log('bigNumbers: ', bigNumbers);



/** Part 4: find and findIndex */
// const myNums = [2, 4, 7, 5];
/** Remember, the return value of the callback must return a boolean! */
// const firstOddValue = myNums.find((num) => num % 2);
// console.log('firstOddValue', firstOddValue);

// const firstOddValueIdx = myNums.findIndex((num) => num % 2);
// console.log('firstOddValueIdx', firstOddValueIdx);



/** Part 5: filter */
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const evenNumbers = numbers.filter((num) => !(num % 2));
// console.log('evenNumbers', evenNumbers);

// const greaterThan100 = numbers.filter((num) => num > 100);
// console.log('greaterThan100', greaterThan100);



/** Part 6: reduce */
// const lunchCosts = [5, 10, 7, 9, 15, 8, 12];
// const startingVal = 0;
// const addUpCosts = (accumulator, currentVal) => accumulator + currentVal;

// const totalCost = lunchCosts.reduce(addUpCosts, startingVal);
// console.log('totalCost', totalCost);

// // reduce is tricky, always use good names!
// const addUpCostsBetter = (total, dailyExpense) => total + dailyExpense;



/** Part 7: Advanced! */

// Don't forget about more arguments!
// const multByIndexAndLength = [1, 2, 3, 4, 5]
//   .map((num, idx, arr) => num * idx * arr.length);

// // chaining
// const myNums = [1, 2, 3, 4, 5];
// const numValuesBiggerThan12WhenTripled = myNums
//   .map((num) => num * 3)
//   .filter((num) => num > 12)
//   .length

// console.log(numValuesBiggerThan12WhenTripled);
// // 1

// // advanced Reduce example
// const repeaters = [1, 2, 4, 2, 3, 1, 4, 6, 2];
// const frequencyCounter = (acc, num) => {
//   acc[num] = (acc[num] || 0) + 1;
//   return acc;
// };

// const frequencies = repeaters.reduce(frequencyCounter, {});
// console.log('frequencies', frequencies);
// // frequencies { '1': 2, '2': 3, '3': 1, '4': 2, '6': 1 }

// // more HOMs
// const hasAtLeastOneEven = myNums.some((num) => !(num % 2));
// console.log('hasAtLeastOneEven', hasAtLeastOneEven);
// // hasAtLeastOneEven true