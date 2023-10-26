# All Skills List

**Table of Contents**
1. [Node](#1-0-0-node)
2. [Variables, Functions, Strings](#1-0-1-vars-functions-strings)
3. [Control Flow](#1-0-2-control-flow)
4. [Loops](#1-1-0-loops)
5. [Arrays](#1-1-1-arrays)
6. [Objects](#1-1-2-objects)
7. [Callbacks & Higher Order Functions](#1-2-0-callbacks--higher-order-functions)
8. [Array Higher Order Methods](#1-2-1-array-higher-order-methods)
9. [Regex](#1-2-2-regex)

## 1-0-0 Node

- (CORE) Understand we're using Node, not browser
- (CORE) Create and run js files
- Access the REPL
- (CORE) module.export and require
- (CORE) Using NPM to load dependencies
- Difference between a module and a package
- (CORE) npm init
- npm init -y
- (CORE) What is a package.json file
- (CORE) npm install
- npm i, npm i -D, npm i -g
- (CORE) npm package imports vs local modules
- (CORE) What are npm scripts, how to run them
- (CORE) How to run tests
- what a test runner like jest is
- (CORE) How to read basic tests
- jest options
- jest watch mode

## 1-0-1 Vars, Functions, Strings

- (CORE) const vs let vs var
- (CORE) To avoid variable hoisting
- (CORE) Primitive Data Types
- NaN
- (CORE) old function declarations get hoisted
- (CORE) arrow expressions do not
- (CORE) params/args and return values
- (CORE) Rough intro to concept of scope
- scope can see up, not down
- (CORE) Why hoisting + scope is why we avoid `function` for now
- (CORE) String indexes and .length
- (CORE) How to make string templates
- backticks keep newlines
- special \t \n chars
- when templates vs concatenation
- (CORE) Know these str methods
  - .includes, .indexOf, .toUpper/LowerCase, .slice
- Familiar with
  - .lastIndexOf, .replace, .replaceAll

## 1-0-2 Control Flow

- (CORE) How conditions work
- (CORE) if/else statements
- specific => general statements
- (CORE) Comparison and logical operators
- (CORE) truthy/falsy values
- guard clauses
- ternarys
- (CORE) scope to lift up variables
- +,-,/,*
- **, %
- .ceil(), .round(), .floor()
- (CORE) typeof operator
- typeof quirks: arrays, null, NaN

## 1-1-0 Loops

- (CORE) `for` loop
- (CORE) initialization, condition, incrementor	
- (CORE) string iteration
- `continue`
- `break`
- (CORE) `return`
- (CORE) `while` loop
- `while` loop unknown length
- know existence of `do while` loop
- nested loops

## 1-1-1 Arrays

- string-like properties
  - (CORE) indexes
  - (CORE) .length
  - (CORE) get value at an index
  - (CORE) iterate through with a for loop
- Advanced mechanics
  - (CORE) replace value at index
  - delete array
  - (CORE) destructuring
  - nesting arrays (matrix)
- basic copy
  - (CORE).slice()
  - (CORE) [...] spread operator
- basic mutations
  - (CORE) push, pop, shift, unshift
  - (CORE) splice
- (CORE) pass by reference vs pass by value

## 1-1-2 Objects

- (CORE) Base mechanics
  - add keys,
  - access values,
  - update values,
  - delete keys,
- (CORE) Dynamic keys
- Object Shorthand
- (CORE) Destructuring
- (CORE) Pass by reference
- JSON
- Cloning
- Accessing nested objects
- Iteration methods

## 1-2-0 Callbacks & Higher Order Functions

- (CORE) What is a callback
- (CORE) What is a Higher Order Function (HOF)
- (CORE) How to create and use a callback
- (CORE) How to create and use a HOF
- Invoking vs Calling Functions
- (CORE) How HOFs and Callbacks make our code more dynamic
- Functions are "First Class Citizen"
- (CORE) How to use a callback with `.sort()`
- How the callback function for `.sort()` actually works
- (CORE) How to sort strings and numbers with `.sort()`
- How to sort objects with `.sort()`
- Mutate vs copying with sort

## 1-2-1 Array Higher Order Methods

- (CORE) Imperative vs Declarative code
- (CORE) Differences between those 2 types
- (CORE) .forEach
- (CORE) .map
- (CORE) .find
  - .findIndex
- (CORE) .filter
- (CORE) .reduce
  - advanced reduce with an object
- (CORE) Why you would use one method over the other
- The three arguments (val, idx, arr) of most higher order methods
- chaining

## 1-2-2 Regex

- (CORE) RegEx: Flags
- (CORE) RegEx: Character Sets
- (CORE) RegEx: Special Character Sets
- (CORE) RegEx: Quantifiers
- (CORE) RegEx: Anchors
- (CORE) RegEx: Groups (non capture)
- (CORE) `.test` method
- (CORE) new RegExp
- (CORE) regex literal syntax