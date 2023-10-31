# Array Higher Order Methods - Key Terms

## Declarative vs. Imperative

* **Imperative code** provides explicit instructions for exactly HOW to complete a task.
    * High control (you write every single line)
    * High effort (you write every single line)

```js
const doubleAllNums = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = arr[i] * 2
    newArr.push(result)
  }
  return newArr;
}
const doubledNumsOld = doubleAllNums([1, 5, 10, 20]);
```

* **Declarative code** provides the desired solution without specifying HOW to get there.
    * Low control
    * Low effort

```js
const doubledNums = [1, 5, 10, 20].map((num) => num * 2);
```

## Array Higher Order Methods

* The important ones to know are:
    * `.forEach(callback)`
    * `.map(modify)`
    * `.filter(test)`
    * `.find(test)`
    * `.findIndex(test)`
    * `.reduce(accumulator, startingValue)`
* Invoke these directly ON the Array:

```js
const nums = [1,2,3];
const doubleNums = nums.map((num) => num * 2);
```

* These are Higher Order **Methods** because they are functions stored within an Array "Object", not as a stand-alone function.

### .forEach(callback)

Iterate through an array, but don't make a copy

| Callback Should Accept                                        	| Callback Should Return 	| .forEach returns 	|
|----------------------------------------------------------------	|------------------------	|------------------	|
| The current value. Its index and the entire array are optional 	| nothing                	| undefined        	|


```js
const letters = ['a', 'b', 'c'];
const callback = (val, idx, arr) => {
  console.log('Value at index:', val);
  console.log('Current index:', idx);
  console.log('Original array:', arr);
};
letters.forEach(callback);
// Value at index: a
// Current index: 0
// Original array: [ 'a', 'b', 'c' ]
// Value at index: b
// Current index: 1
// Original array: [ 'a', 'b', 'c' ]
// Value at index: c
// Current index: 2
// Original array: [ 'a', 'b', 'c' ]
```

### .map(modifyCallback)


Make a copy of an array with changes to each value

| Callback Should Accept                                       | Callback Should Return                | .map returns                       |
|----------------------------------------------------------------|---------------------------------------|------------------------------------|
| The current value. Its index and the entire array are optional | modified version of the current value | the new array with all the changes |

```js
const numbers = [10, 20, 30];
const bigNumbers = numbers.map((val, idx, arr) => {
  console.log('cb: val, idx, arr', val, idx, arr);
  return val * 100;
});
// cb: val, idx, arr 10 0 [ 10, 20, 30 ]
// cb: val, idx, arr 20 1 [ 10, 20, 30 ]
// cb: val, idx, arr 30 2 [ 10, 20, 30 ]

console.log('bigNumbers: ', bigNumbers); // [1000, 2000, 3000]
```

### .find(testCallback)

Get the first matching element in an Array, or `null`

| Callback Should Accept                                         | Callback Should Return                                   | .find returns              |
|----------------------------------------------------------------|----------------------------------------------------------|----------------------------|
| The current value. Its index and the entire array are optional | a boolean used to determine if the match is found or not | the found value or  `null` |

```js
const myNums = [2, 4, 7, 5];
const firstOddValue = myNums.find((num) => num % 2 === 0);
console.log('firstOddValue', firstOddValue);
// firstOddValue 7
```

Remember, the return value of the callback must return a boolean!

### .findIndex(testCallback)

Get the index of the first matching element in an Array, or `null`

| Callback Should Accept                                         | Callback Should Return                                   | .findIndex returns       |
|----------------------------------------------------------------|----------------------------------------------------------|--------------------------|
| The current value. Its index and the entire array are optional | a boolean used to determine if the match is found or not | the found index or  `-1` |

```js
const firstOddValueIdx = myNums.findIndex((num) => num % 2);
console.log('firstOddValueIdx', firstOddValueIdx);
// firstOddValueIdx 2
```

### .filter(testCallback)

Get ALL elements in an Array that pass a given test

| Callback Should Accept                                         | Callback Should Return                                     | .filter returns                          |
|----------------------------------------------------------------|------------------------------------------------------------|------------------------------------------|
| The current value. Its index and the entire array are optional | a boolean used to determine if the current element is kept | a new array of matches (or an empty one) |

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = numbers.filter((num) => !(num % 2));
console.log('evenNumbers', evenNumbers);
// evenNumbers [ 2, 4, 6, 8 ]

const greaterThan100 = numbers.filter((num) => num > 100);
console.log('greaterThan100', greaterThan100);
// greaterThan100 []
```

### .reduce(accumulatorCallback, startingValue)

"reduce" array values into a single value.

| Callback Should Accept               | Callback Should Return                                        | .reduce returns             |
|--------------------------------------|---------------------------------------------------------------|-----------------------------|
| An accumulator and the current value | the next value of the accumulator (the eventual return value) | the final accumulated value |

```js
const lunchCosts = [5, 10, 7, 9, 15, 8, 12];
const startingVal = 0;
const addUpCosts = (accumulator, currentVal) => accumulator + currentVal;

const totalCost = lunchCosts.reduce(addUpCosts, startingVal);
console.log('totalCost', totalCost);
// totalCost 66

// reduce is tricky, always use good names!
const addUpCostsBetter = (total, dailyExpense) => total + dailyExpense;
```

## Advanced Stuff

```js
// Don't forget about more arguments!
const multipliedByIndexAndLength = [1, 2, 3, 4, 5]
  .map((num, idx, arr) => num * idx * arr.length);

// chaining
const myNums = [1, 2, 3, 4, 5];
const numValuesBiggerThan12WhenTripled = myNums
  .map((num) => num * 3)
  .filter((num) => num > 12)
  .length

console.log(numValuesBiggerThan12WhenTripled);
// 1

// advanced Reduce example
const repeaters = [1, 2, 4, 2, 3, 1, 4, 6, 2];
const frequencyCounter = (acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
};

const frequencies = repeaters.reduce(frequencyCounter, {});
console.log('frequencies', frequencies);
// frequencies { '1': 2, '2': 3, '3': 1, '4': 2, '6': 1 }

// more HOMs
const hasAtLeastOneEven = myNums.some((num) => !(num % 2));
console.log('hasAtLeastOneEven', hasAtLeastOneEven);
// hasAtLeastOneEven true
```
