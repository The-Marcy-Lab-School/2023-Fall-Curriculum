/* IMPERATIVE
Do exactly what I tell you.
- High control
- High effort
*/
const doubleAllNums = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = arr[i] * 2
    newArr.push(result)
  }
  return newArr;
}
const doubledNumsOld = doubleAllNums([1, 5, 10, 20]);


/* DECLARATIVE
Specifies the result desired without HOW to get there
- Low effort
- Low control
*/
const doubledNums = [1, 5, 10, 20].map((num) => num * 2);


// A higher order function is a function that takes in 
// a callback function and invokes that function
// OR 
// A function that returns a function


/** array.forEach(callback)
 * Iterate through an array, but don't make a copy
 * Callback should accept: the current value. Its index and the entire array are optional
 * Callback should return: nothing
 * .forEach returns: undefined
*/

const letters = ['a', 'b', 'c', 'd', 'e'];
const callback = (val, idx, arr) => {
  // print only for first half of indexes (rounded down)
  if (idx >= Math.floor(arr.length / 2)) {
    return; // return early we are in the second half
  }
  console.log('Value at index:', val);
  console.log('Current index:', idx);
  console.log('Original array:', arr);
};
// letters.forEach(callback);

/** What's essentially happening under the hood  */
const fakeForEach = (arr, callbackFunction) => {
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]
    callbackFunction(value, i, arr)
  }
}
// fakeForEach(letters, callback);

const users = [
  { name: 'ben', age: 28 },
  { name: 'william', age: 30 },
  { name: 'michael', age: 32 },
  { name: 'daniel', age: 34 },
];

// const allCapsUsers = users.map((user) => {
//   const userCopy = { ...user };
//   userCopy.name = userCopy.name.toUpperCase();
//   return userCopy;
// })
// console.log(users);
// console.log(allCapsUsers);

/* To write a callback for a Higher Order Method:
- a function that will be called on each value in the array
- the body is what I want to do with a single value
*/

// const printNameOnly = (user) => {
//   console.log(user.name);
// }
// users.forEach(printNameOnly)
// users.forEach((user) => console.log(user.age))



/** array.map(modifyCallback)
 * Make a copy of an array with changes to each value
 * Callback should accept: the current value. Its index and the entire array are optional
 * Callback should return: modified version of the current value
 * .map returns: the new array with all the changes
*/

// const numbers = [10, 20, 30];
// const doubled = numbers.map((num) => num * 2);
// console.log(doubled);
// console.log(numbers);
// const letters2 = ['a', 'b', 'c'];
// const allCapsLetters = letters2.map((letter) => {
//   return letter.toUpperCase();
// });




// const bigNumbers = numbers.map((val, idx, arr) => {
//   console.log('cb: val, idx, arr', val, idx, arr);

//   return val * 100;
// });

// console.log('bigNumbers: ', bigNumbers);



/** array.find(testCallback)
 * Get the first matching element in an Array, or `null`
 * Callback should accept: the current value. Its index and the entire array are optional
 * Callback should return: a boolean used to determine if the match is found or not
 * .find() returns: the found value or `null`
*/
// const myNums = [2, 4, 7, 5];
// /* Remember, the return value of the callback must return a boolean! */
// const firstOddValue = myNums.find((num) => num % 2);
// console.log('firstOddValue', firstOddValue);


/** array.findIndex(testCallback)
 * Get the index of the first matching element in an Array, or `null`
 * Callback should accept: the current value. Its index and the entire array are optional
 * Callback should return: a boolean used to determine if the match is found or not
 * .findIndex() returns: the found index or `-1`
*/
// const firstOddValueIdx = myNums.findIndex((num) => num % 2);
// console.log('firstOddValueIdx', firstOddValueIdx);



/** array.filter(testCallback)
 * Get ALL elements in an Array that pass a given test
 * Callback should accept: the current value. Its index and the entire array are optional
 * Callback should return: a boolean used to determine if the current element is kept
 * .findIndex() returns: a new array of matches (or an empty one)
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log('evenNumbers', evenNumbers);
console.log(numbers);

const usersUnder30 = users.filter((user) => user.age <= 30);
console.log(usersUnder30)

// const greaterThan100 = numbers.filter((num) => num > 100);
// console.log('greaterThan100', greaterThan100);



/** array.reduce(accumulatorCallback, startingValue)
 * "reduce" array values into a single value.
 * Callback should accept: an accumulator and the current value
 * Callback should return: the next value of the accumulator (the eventual return value)
 * .reduce() returns the final accumulated value
*/
// const lunchCosts = [5, 10, 7, 9, 15, 8, 12];
// const startingVal = 0;
// const addUpCosts = (accumulator, currentVal) => accumulator + currentVal;

// const totalCost = lunchCosts.reduce(addUpCosts, startingVal);
// console.log('totalCost', totalCost);

// // reduce is tricky, always use good names!
// const addUpCostsBetter = (total, dailyExpense) => total + dailyExpense;



/** Advanced stuff! */

// // Don't forget about more arguments!
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