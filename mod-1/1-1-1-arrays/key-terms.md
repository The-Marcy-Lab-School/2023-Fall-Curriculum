# Arrays

## The basics

- Arrays are objects
- Arrays are lists of data (order matters)
- Arrays have indexes like strings
- First index is 0
- Last index is array.length - 1
- Use brackets to encapsulate the data
- To access we use `array[0]`

## Destructuring

"Destructuring" is the act of creating variables from the contents of an Array/Object

```js
const people = ["Wendy", "Jon", "Daniel"];
const [mom, dad, brother] = people;
console.log(mom);
console.log(dad);
console.log(brother);
```

## 2D Arrays

An Array can contain other Arrays. This is called a "2D" Array or a "matrix".

```js
const coordinates = [
  [10, 20],
  [30, 40],
  [50, 60],
];

const firstCoordinatePair = coordinates[0];
const firstX = coordinates[0][0];
const firstY = coordinates[0][1];

console.log(firstCoordinatePair);
console.log(firstX);
console.log(firstY);
```

When accessing a 2D array, the first index references the "row" and the second index references the "column"

## Arrays are mutable, Strings are not

Arrays can be mutated

```js
const endLetters = ["x", "y", "z"];
endLetters[1] = "foo";
console.log(endLetters); // ["x", "foo", "z"]
```

Strings cannot be mutated, we can only make copies:

```js
let myName = "ben";
myName[0] = "J";
console.log(myName); // still "ben"

myName = myName[0].toUpperCase() + myName.slice(1);
console.log(myName); // myName is reassigned to "Ben"
```

We can even modify the `.length` of an Array to empty them:

```js
endLetters.length = 0; // endLetters now has no values
console.log(endLetters); // []
```

## Strings and other primitives are "passed by value"

When a variable holds a String (or any primitive), and we copy that value into another variable, the "raw" data is duplicated. Each variable is independent. Changes to one variable do NOT affect the other.

```js
// I lived with my partner in New Orleans
let myZipCode = "70119";
let partnerZipCode = myZipCode;

// But then I moved
myZipCode = "11238";

// partnerZipCode doesn't change
console.log("myZipCode:", myZipCode); // 11238
console.log("partnerZipCode:", partnerZipCode); // 70119
```

This is like forking a repo. Changes to the fork don't affect the original repo.

## Arrays are "passed by reference"

When a variable holds an Array and we copy that value into another variable, they will both reference the exact same Array. Changes to that Array made by one variable are seen when we reference the other variable:

```js
// My partner and I share our kitchen supplies
let myKitchenSupplies = ["pot", "pan", "rice cooker"];
let partnerKitchenSupplies = myKitchenSupplies;

partnerKitchenSupplies.push("spatula");
console.log(myKitchenSupplies);

myKitchenSupplies = [];
console.log(partnerKitchenSupplies);
```

## Pure Functions

"Pure functions only interact with their own scope." - Ahmad

A pure function is a function that:

1. Always has the same output given the same input
2. Has no side effects

This is NOT a pure function:

```js
let sum = 5;
const addImpure = (a, b) => {
  sum = a + b;
  return sum;
};
console.log(addImpure(5, 3)); // 8
console.log(addImpure(2, 4)); // 6
console.log(sum); // 6
```

But we can make it pure by only modifying variables within the scope of the function

```js
sum = 10;
const addPure = (a, b) => {
  let sum = a + b; // this is a new variable only in this scope
  return sum;
};
console.log(addPure(5, 3)); // 8
console.log(addPure(2, 4)); // 6
console.log(sum); // 10
```

Because Arrays are passed by reference, this is NOT

## Making Copies of Arrays to make pure functions

Functions that accept Arrays and modify them are not pure. Because Arrays are passed by reference, the parameter that receives the Array references the same Array as the variable in the outer scope. Modifications made to the Array inside the function are seen outside of the function too.

```js
let names = ["gonzalo", "maya", "reuben"];
const replaceFirst = (arr, value) => {
  // arr = names
  // value = 'zo'
  arr[0] = value;
};
replaceFirst(names, "zo"); // ['zo', 'maya', 'reuben']
```

To make a function that modifies an Array pure, we need to make a copy of it first. There are two common ways to do this:

1. The `slice` method: `const copy = arr.slice()`
2. The "spread" syntax: `const copy = [...arr]`

```js
let names = ["gonzalo", "maya", "reuben"];
const replaceFirstPure = (arr, value) => {
  const copy = [...arr]; // creates a new array with the contents of arr "spread" inside
  copy[0] = value;
  return copy;
};
const newNames = replaceFirstPure(names, "zo");
console.log("names is not affected now: ", names);
console.log("this is the copy: ", newNames);
```
