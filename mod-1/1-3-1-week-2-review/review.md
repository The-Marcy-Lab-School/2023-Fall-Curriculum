# Topics

* let vs. const vs. var
  * Is it reassignable?
  * Is it hoisted?
  * How is it scoped?

`let` - reassignable, hoisted, block scoped
`const` - not reassignable, not hoisted, block scoped
`var` - reassignable, hoisted, function scoped

* **Block Scoped** means scoped to any code block (loops, `if`/`else` statements, functions)
* **Function scoped** means scoped only to functions
* `var` variables are "Hoisted to the top" - you can reference variables "before" they are declared

```js
const myFunc = () => {
  console.log(a, b, c, x); // 1
  if (true) {
    const a = '5';
    let b = 10;
    var c = true;
    x = 'hi'
    console.log(a, b, c, x); // 2
  }
  console.log(a, b, c, x); // 3
}
console.log(a, b, c, x); // 4
```
* Where are `x`, `a`, `b`, and `c` available?
* Scope is where each code block exists and how the variables inside them can be used

* **What is Pass by value vs. Pass by reference?**

* spread operator
* pure functions
* looping with `continue` and `break`