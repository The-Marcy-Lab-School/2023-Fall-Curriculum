# 2-3-1-localStorage-f23

**Table of Contents**
- [What is localStorage?](#what-is-localstorage)
- [Setting and Getting Values](#setting-and-getting-values)
- [toString() vs. JSON.stringify()](#tostring-vs-jsonstringify)
- [Stringify and Parse](#stringify-and-parse)
- [`localStorage` Helpers](#localstorage-helpers)
- [Data Layer](#data-layer)

## What is localStorage?

The `localStorage` interface allows you to store data across browser sessions.

`localStorage` is similar to `sessionStorage`, except that while `localStorage` data has no expiration time, `sessionStorage` data gets cleared when the page session ends — that is, when the page is closed. 

## Setting and Getting Values

The two most commonly used `localStorage` methods are
- `localStorage.setItem(key, valueString)`
- `localStorage.getItem(key)`

```js
localStorage.setItem('luckyNumber', 13);
localStorage.setItem('favoriteColor', 'purple');

const storedNumber = localStorage.getItem('luckyNumber');
const storedColor = localStorage.getItem('favoriteColor');

console.log(storedNumber);          // 13
console.log(storedColor);           // purple
console.log(typeof storedNumber);   // string
console.log(typeof storedColor);    // string
```

Notice that `localStorage` **can only store strings**. 

## toString() vs. JSON.stringify()

When using `setItem`, the value is turned into a string before being stored. It does this using the given value's `.toString()` method (every data type has this method).

As you can see, this is particularly annoying when dealing with Arrays and Objects because of the way that they get turned into strings.

```js
const num = 13;
const bool = true;
const str = 'purple';
const arr = [1, 2, 3];
const obj = { name: 'ben' };

console.log(num.toString());  // '13'
console.log(bool.toString()); // 'true'
console.log(str.toString());  // 'purple'
console.log(arr.toString());  // '1,2,3'
console.log(obj.toString());  // '[object Object]'

console.log(JSON.stringify(arr)); // [1, 2, 3]
console.log(JSON.stringify(obj)); // { name: 'ben' }
```

However, the `JSON.stringify()` method preserves the structure of Arrays and Objects.

## Stringify and Parse

Before storing values in `localStorage`, we should `JSON.stringify()` them.

```js
const instructors = ['ben', 'gonzalo', 'motun', 'zo', 'carmen'];
const user = {
  name: 'ben',
  canCode: true
}

// We typically will JSON.stringify() the value before we set it... 
localStorage.setItem('instructors', JSON.stringify(instructors));
localStorage.setItem('user', JSON.stringify(user));

// ...and JSON.parse() the value when we get it:
const storedInstructors = JSON.parse(localStorage.getItem('instructors'));
const storedUser = JSON.parse(localStorage.getItem('user'));

console.log('storedInstructors:', storedInstructors);
console.log('storedUser:', storedUser);
```

When retrieving a value from `localStorage`, we use the `JSON.parse()` method which takes a string and tries to turn it into a value

## `localStorage` Helpers

That's quite a bit of code to write and re-write every time we can to set or get values to/from `localStorage`. 

To simplify the code we have to write, we can write a helper function:

```js
const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (err) {
    console.error(err);
    return null;
  }
}

setLocalStorageKey('nums', [1, 2, 3])
const storedArr = getLocalStorageKey('nums');

console.log(storedArr); // [1, 2, 3]
```

We wrap the `JSON.parse()` function invocation in a `try/catch` block in the event that `JSON.parse()` can't determine the value type of the given string.
* If it can, it will return the value.
* If it can't, the error will be printed (and not break everything) and `null` will be returned.

## Data Layer

As you can see, working with `localStorage` can be quite tricky. We want to ensure that our application works in a **consistent and predictable** manner.

So, we will typically isolate the logic for dealing with `localStorage` in its own file. In that file, we'll create functions for interacting with `localStorage`. However, we'll only export the functions that indirectly interact with `localStorage`. 

This way, we create a **consistent** and **predictable** interface.

```js
// local-storage.js
const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (err) {
    console.error(err);
    return null;
  }
}

export const getNames = () => getLocalStorageKey('names');
export const setNames = (names) => getLocalStorageKey('names', names);

export const initializeNames = () => setNames(['ben', 'gonzalo', 'motun']);

export const addName = (name) => {
  const names = getNames();
  setNames([...names, name]);
}

export const removeName = (nameToRemove) => {
  const names = getNames().filter((name) => name !== nameToRemove);
  setNames([...names]);
}

// mains.js
import { initializeNames, addName, getNames } from './local-storage.js';

initializeNames();
console.log(getNames());  // ['ben', 'gonzalo', 'motun']

addName('carmen');
addName('zo');
console.log(getNames());  // ['ben', 'gonzalo', 'motun', 'carmen', 'zo]
```

**Q: What makes this predictable and consistent?**

That file acts as a **data layer**. We might also decide to isolate our DOM manipulation code and create a **DOM layer** or create an **event handling layer**.