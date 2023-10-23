# Callbacks & Higher Order Functions

## Let's learn a new way to INVOKE functions.

![](recipe.png)

Functions are like recipes. Sometimes we make a recipe (a function) so that WE can use the recipe to make a meal (we invoke the function). 

Other times, we give recipes to our friends so that THEY can make the meal. 

Sometimes, we give our functions to other functions so that THEY can invoke our function.

## A normal function

```js
const greet = (person, msg, volumeLevel) => {
  let result = '';
  if (volumeLevel === 'loud') {
    result = `${person} said, "${msg.toUpperCase()}!"`
  } else if (volumeLevel === 'quiet') {
    result = `${person} said, "...${msg.toLowerCase()}..."`
  }
  console.log(result)
  return result;
}

greet('Maya', 'Hello', 'loud')
greet('Zo', 'Bye', 'quiet')
```

What's wrong with this function?
- Repetitive
- Each option must be hard-coded
- Has a little too much control over HOW the greeting is formatted


## Callbacks & Higher Order Functions

* A **callback** is a function that is given to another function as an argument
* A **higher order function (HOF)** is a function that takes in and/or returns a function
* HOFs invoke callbacks
* "We" do not invoke callbacks

```js
// These are callbacks
const yell = (msg) => `${msg.toUpperCase()}!!`;
const whisper = (msg) => `...${msg.toLowerCase()}...`;

// This is a "Higher-Order" function
const greetBetter = (person, msg, voiceCallback) => {
  const result = `${person} said, "${voiceCallback(msg)}"`
  console.log(result);
  return result;
}

greetBetter('Maya', 'Hello', yell);
greetBetter('Zo', 'Bye', whisper);

/* we can use "inline arrow functions" */
greetBetter('Ben', 'Hello World', (msg) => `${msg}?`)
```

When we refactor this function to use callbacks we:
- aren't repeating ourself
- no longer need to specify HOW the person is greeting
- aren't limited by the options we hard-coded
- we can use **inline** functions to define single-use callbacks without storing them in a variable

