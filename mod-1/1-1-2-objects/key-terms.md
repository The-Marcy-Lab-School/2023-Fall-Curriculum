# Objects - Key Terms

## The basics

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

## Dynamic Properties

When the key name of a property is not known until you run the program, we can add "dynamic" properties using bracket notation (we can't use dot notation)

```js
const prompt = require("prompt-sync")({ sigint: true });

const car = {
  name: "Corolla",
  maker: "Toyota",
};

console.log("Add a property to the car!");
const property = prompt("Name the property!");
const value = prompt("Add a value!");
car[property] = value;

console.log("your car now has these properties:");
console.log(car);
```

## Destructuring

Destructuring is the process of creating variables from an existing Array/Object. When destructuring an Object, the variable names must match the property key names that you wish to extract.

```js
const userBen = {
  name: "Ben",
  age: 28,
};
const introduceSelf = (person) => {
  const { name, age } = person; // destructuring
  console.log(`Hello, ${name}! I am ${age} years old.`);
};

introduceSelf(userBen);
```

Often, when an Object is passed to a function, we will destructuring the argument directly in the parameter list:

```js
const userBen = {
  name: "Ben",
  age: 28,
};
const introduceSelf = (person) => {
  console.log(`Hello! My name is ${person.name} and I am ${person.age} years old.`);
};

introduceSelf(userBen);
```

## Object creation shorthand using Variables

```js
// Creating an object with raw data
const user1 = {
  name: "ben",
  age: 28,
  canDrive: true,
};

// Creating an Object using data from variables
const name = "ben";
const age = 28;
const canDrive = true;

const user2 = {
  name: name,
  age: age,
  canDrive: canDrive,
};

// Using the shorthand:
const user3 = {
  name,
  age,
  canDrive,
};
```

This can be helpful when using "factory functions" - functions that create objects with a specific set of properties.

This example makes a user object with the provided properties as well as some default values (`isAdmin` is `false` and an empty `friends` list)

```js
const makeUser = (name, age, canDrive) => {
  return {
    name,
    age,
    canDrive,
    isAdmin: false,
    friends: [],
  };
};

const ben = makeUser("ben", 28, true);
const maya = makeUser("Maya", 25, false);
const reuben = makeUser("ben", 22, false);
```
