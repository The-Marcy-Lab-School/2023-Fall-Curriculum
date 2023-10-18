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

const nameCarProperty = (car) => {
  const property = prompt("Name the property!");
  const value = prompt("Add a value!");
  car[property] = value;
};

const car = {
  name: "Corolla",
  maker: "Toyota",
};
addCarProperty(car);
```
