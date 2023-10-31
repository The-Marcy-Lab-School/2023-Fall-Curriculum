# Mod 1 - Week 2 Study Guide 

**Table of Contents**
* [1-1-0 Loops](#1-1-0-loops)
  * [For Loops](#for-loops)
  * [While Loops](#while-loops)
  * [Nested Loops](#nested-loops)
* [1-1-1 Arrays](#1-1-1-arrays)
  * [Array Basics](#array-basics)
  * [Mutating Array Methods](#mutating-array-methods)
  * [Pass by Reference vs. Pass by  Value](#pass-by-reference-vs-pass-by-value)
  * [Pure Functions](#pure-functions)
  * [Making Shallow Copies of Arrays](#making-shallow-copies-of-arrays)
* [1-1-2 Objects](#1-1-2-objects)
  * [Object Basics](#object-basics)
  * [Dynamic Properties](#dynamic-properties)
  * [Destructuring](#destructuring)

## 1-1-0 Loops

### For Loops

- **Iteration** is the repetition of a process, getting closer to some result each time.
- `for` loops are best used to repeat a process a known number of times.

  - The **initialization** is where the loop begins
  - The **condition** must be `true` for the loop to continue
  - The **increment** determines what to change after each loop
  - The **body** is what gets executed with each iteration of the loop.

```js
const string = "hello";
for (let i = 0; i < string.length; i++) {
  console.log(string[i], i);
}
// h 0
// e 1
// l 2
// l 3
// o 4
```

- An **infinite loop** is one in which the condition is ALWAYS `true`

**Q: Write an infinite loop**

<details><summary>Answer</summary>

There are many ways to make an infinite loop:

```js
// decrementing when we should be incrementing
for (let i = 0; i < 10; i--) {
  console.log("it's infinite!");
}

// a condition that is always true!
for (let i = 0; i >= 0; i++) {
  console.log("it's infinite!");
}

// or the weirdest of them all. This condition is always true too!
for ( ; true; ) {
  console.log("it's infinite!");
}
```

</details>

### While Loops

- `while` loops are best used to repeat a process an unknown number of times
- `break` prematurely breaks out of a loop
- `continue` prematurely goes to the iteration step of the loop

```js
const prompt = require("prompt-sync")(); // for later

while (true) {
  const input = prompt("Enter a number or q to quit: ");
  if (input === "q") {
    console.log("Bye!");
    break; // exit the loop immediately
  }
  if (Number.isNaN(Number(input))) {
    console.log("please enter a number");
    continue; // loop again immediately
  }
  console.log(`${input}? That's a great number!`);
}
```

**Q: What is an example of a program that would use a `while` loop? Hint: one example has to do with Node.**

<details><summary>Answer</summary>

The Node Read-Eval-Print-Loop (REPL) uses a `while` loop to continuously ask for user input. Run this program by entering the command `node` without any arguments into your terminal.

</details>

### Nested Loops

- A **nested loop** is a loop written inside the body of another loop. For each iteration of the outer loop, the inner loop will complete ALL of its iterations.

```js
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(`${i} - ${j}`);
  }
}
```

**Q: What does the nested loop above print to the console?**

<details><summary>Answer</summary>

```
0 - 0
0 - 1
0 - 2
0 - 3
0 - 4
1 - 0
1 - 1
1 - 2
1 - 3
1 - 4
```

</details>


## 1-1-1 Arrays

### Array Basics

- An **Array** is a type of object that stores data in an ordered list.
- An Array is created using **square brackets** with **comma-separated values**:

```js
const family = ['Wendy', 'Jon', 'Daniel'];
const scores = [95, 87, 79, 88];
const marcyStaff = [
  { name: 'ben', isInstructor: true },
  { name: 'gonzalo', isInstructor: true },
  { name: 'travis', isInstructor: false },
];
```

- Arrays have indexes and `.length` like strings
  - The first index is `0`
  - The last index is `array.length - 1`
- To access a single value, use **bracket notation**: `array[index]`
- We can use bracket notation to reassign individual indexes in an Array

```js
const family = ['Wendy', 'Jon', 'Daniel'];
console.log(family[0]); // Wendy
console.log(family.length); // 3
console.log(family[family.length - 1]); // Daniel

family[0] = 'William';
family[1] = 'Michael';
console.log(family); // ['William', 'Michael', 'Daniel'];
```

- We can iterate through the contents of an Array with a `for` loop:

```js
const family = ['Wendy', 'Jon', 'Daniel'];
for (let i = 0; i < family.length; i++) {
  const familyMember = family[i];
  console.log(`I am related to ${familyMember}`);
}
// I am related to Wendy
// I am related to Jon
// I am related to Daniel
```

**Q: Clearly explain why `array.length-1` is always the index of the last element in an Array**

<details><summary>Answer</summary>

Every value of an Array has an index, starting with `0`. The first value in an Array is at index `0`. The second value in an Array is at index `1`. So, the `n`th value in an Array is at index `n-1`. 

If there are 5 values in an Array, then the last value would be at index `5-1` or `4`. 

```js
const letters = ['a', 'b', 'c', 'd', 'e']
console.log(letters[4]);                // 'e'
console.log(letters.length);            // 5
console.log(letters[letters.length-1]); // 'e'
```

If an Array has `arr.length` values in it, then the index of the last value will be `arr.length - 1`

</details>

### Mutating Array Methods

* Unlike Strings, Arrays are **mutable** - their contents can be modified.
* Arrays have a number of methods that mutate the contents of the Array:

```js
const nums = [1, 2, 3]
nums.push(4);     // adds to the end (the "tail")
console.log(nums); // [1, 2, 3, 4]

nums.unshift(0);  // adds to the beginning (the "head")
console.log(nums); // [0, 1, 2, 3, 4]

nums.pop();   // removes the last value
console.log(nums); // [0, 1, 2, 3]

nums.shift(); // removes the first value
console.log(nums); // [1, 2, 3]

nums.splice(2, 1); // starting at index 2, removes 1 value
console.log(nums); // [1, 2];

nums.splice(1, 0, 'hi'); // starting at index 1, removes 0 values and inserts 'hi'
console.log(nums); // [1, 'hi', 2]
```

* Arrays have many more methods, many of which are similar to String methods such as:
  * `arr.includes()`
  * `arr.indexOf()`

### Pass by Reference vs. Pass by Value

- When an Array is stored in a variable, a **reference** to the memory location of the Array is stored in the variable, not the values of the Array itself.
- When a variable holding an Array or Object is assigned to another variable or function parameter, the reference is passed along, not the values. 

```js
// My partner and I share our kitchen supplies
let myKitchenSupplies = ["pot", "pan", "rice cooker"];
let partnerKitchenSupplies = myKitchenSupplies;

partnerKitchenSupplies.push("spatula");
console.log(myKitchenSupplies);

myKitchenSupplies = [];
console.log(partnerKitchenSupplies);
```

- In this situation, there is only one Array **reference** that is held by two different variables.
- If you mutate the Array reference, both variables will "see" those changes

```js
const addValueToEnd = (arr, newVal) => {
  arr.push(newVal);
}

const letters = ['a', 'b', 'c'];
addValueToEnd(letters, 'd');
console.log(letters); // ['a', 'b', 'c', 'd']
```

- Keep this in mind as you create functions that take in and mutate Arrays. 

**Q: Why is it important to know that Arrays/Objects are passed by reference?**

<details><summary>Answer</summary>

If you were to copy an Array from one variable to another, you might think that there are now two separate Arrays. You may then accidentally mutate the Array using one variable, thinking that the Array referenced by the other variable will not be affected.

This would likely cause bugs.

</details>

### Pure Functions

- Functions that mutate values outside of their scope are considered **impure functions**. This is called a **side effect**.
- A **pure function** is one that has no side-effects and produces the same outputs when called with the same inputs.

**Q: Are pure functions "better" than impure functions? What benefits do pure functions provide?**

<details><summary>Answer</summary>

Pure functions provide the benefit of being predictable. They are not necessarily "better" than impure functions though. Sometimes, functions need to have side effects.

</details>


### Making Shallow Copies of Arrays

* Making a copy of an Array is an effective way to avoid mutating the original Array when using mutating methods.
* There are two common ways to make a **shallow copy** of an Array

```js
const nums = [1,2,3];
const copy1 = nums.slice();
const copy2 = [...nums]; // "spread" syntax

copy1.push(4);
copy2.pop();

console.log(copy1); // [1,2,3,4]
console.log(copy2); // [1,2]
console.log(nums);  // [1,2,3]
```

**Q: Refactor this function such that it does not mutate the input Array**

```js
const doubleValues = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
  return arr;
}
```

<details><summary>Answer</summary>

There are a few ways to do this but here is one way:

```js
const doubleValues = (arr) => {
  const copy = [...arr]
  for (let i = 0; i < copy.length; i++) {
    copy[i] = copy[i] * 2;
  }
  return copy;
}
```

</details>

## 1-1-2 Objects

### Object Basics

- Objects are a data type that can store multiple pieces of data as **key:value** pairs called **properties**
- Objects are best used for collections of data where each value needs a name

```js
// This object has two properties with the keys "name" and "maker"
const car = {
  name: "Camry",
  maker: "Toyota",
};
```

- Object values can be accessed and/or modified using dot notation or bracket notation

```js
// add key/value pairs
car.color = "blue"; // dot notation
car["model-year"] = 2018; // bracket notation

// access values
console.log(car.color); // blue
console.log(car["model-year"]); // 2018
```

- Delete properties by using the `delete` keyword and dot/bracket notation

```js
// delete values
delete car.color;
delete car["model-year"];
```

**Q: How are Arrays and Objects similar. How are they different? When would you use one or the other?**

<details><summary>Answer</summary>

* Arrays and Objects both can store multiple data values.
* While values in an Object have a key (a String), values in an Arary have an index (a Number).
* Arrays and Objects both use bracket notation to access values but only Objects use dot notation.
* Use an Array when storing _similar_ data or when the data needs to be in a numbered order (a list of todos)
* Use an Object when storing _related_ data or when the data needs to be referenced by name (a collection of user data)

</details>

### Dynamic Properties

When the key name of a property is not known until you run the program, we can add "dynamic" properties using bracket notation (we can't use dot notation)

```js
const prompt = require("prompt-sync")();

const car = {
  name: "Corolla",
  maker: "Toyota",
};

const key = prompt("What do you want to know about your car?");
const value = car[key];

console.log(`The value for the key ${key} is ${value}`);
```

**Q: Why won't `car.key` work in the example above?**

<details><summary>Answer</summary>

When using dot notation, we are effectively "hard coding" which property we are accessing. If we write `car.key`, then we are saying we want to access the "key" property of the object `car`, but there is no property with a key named "key". 

When using bracket notation, the value held by the variable `key` will be resolved first, and we'll access the property who key name matches the value held by the variable `key`.

</details>

### Destructuring

* **Destructuring** is a method of declaring a list of variables and assigning them values from an Array or Object.

```js
const coords = [30, 90];
const [lat, long] = coords;
console.log(lat, long); // 30 90

const family = ['Wendy', 'Jon', 'Daniel'];
const [mom, , brother] = family; // skips the value 'Jon'
console.log(mom, brother); // Wendy Daniel
```
When destructuring Arrays:
* Surround the list of variables with `[]` and assign to them the entire Array.
* The names of the variables are up to you.
* The order of the variables matters: the first variable gets the first value in the Array; the second variables gets the second value in the Array; and so on...
* You can skip values by leaving a blank space

```js
const user = {
  name: 'ben',
  age: 28,
  canCode = true;
}
const { name, age, canCode } = user;
console.log(name, age, canCode); // ben 28 true

const car = {
  make: "chevy",
  model: "cobalt",
  year: 2007
}
const { year, make } = car;
console.log(year, make); // 2007 chevy
```

When destructuring Objects:
* Surround the list of variables with `{}` and assign to them the entire Object.
* The names of the variables _must_ match the property names of the Object.
* The order of the variables does not matter
* You can omit any unneeded properties

**Q: Consider the array below. How would you use destructuring to create three variables called `apple`, `banana`, and `orange`?**

```js
const fruits = ['apple', 'banana', 'orange']
```

<details><summary>Answer</summary>

```js
const [apple, banana, orange] = fruits;
```

</details><br>

**Q: Consider the function below. How would you rewrite it such that it uses destructuring?**

```js
const introduceSelf = (person) => {
  console.log(`Hello! My name is ${person.name} and I am ${person.age} years old.`);
};
```

<details><summary>Answer</summary>

There are couple ways of doing this. You could destructure the `person` parameter in the function body:

```js
const introduceSelf = (person) => {
  const { name, age } = person;
  console.log(`Hello! My name is ${name} and I am ${age} years old.`);
};
```

But the best way is to destructure the parameter:

```js
const introduceSelf = ({ name, age }) => {
  console.log(`Hello! My name is ${name} and I am ${age} years old.`);
};
```

</details>