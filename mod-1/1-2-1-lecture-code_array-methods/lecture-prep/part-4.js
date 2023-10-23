/** .find */

const myNums = [2, 4, 7, 5];
const firstOddValue = myNums.find((num) => num % 2);
console.log('firstOddValue', firstOddValue);
// 7

/** Remember, the return value of the callback must return a boolean! */

/** .findIndex  */
const firstOddValueIdx = myNums.findIndex((num) => num % 2);
console.log('firstOddValueIdx', firstOddValueIdx);
// 2
