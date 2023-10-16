// Use typeof to tell what type a variable is
console.log(typeof 'hi'); // string
console.log(typeof 4); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof { ok: true }); // object
console.log(typeof [1, 2, 3]); // object
console.log(typeof NaN); // number
console.log(typeof (() => {})); // function

// check NaN with isNaN
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(1)); // false
console.log(Number.isNaN('1')); // false

const nullVariable = null;
// check null with ===
console.log(nullVariable === null); // true
console.log(nullVariable === undefined); // false

// check arrays with Array.isArray
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({ ok: true })); // false
