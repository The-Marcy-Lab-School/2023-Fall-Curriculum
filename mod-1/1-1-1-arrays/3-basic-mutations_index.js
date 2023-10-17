
// Arrays are "mutable"
const endLetters = ['x', 'y', 'z'];
endLetters[1] = 'foo';
console.log(endLetters);

// Strings are not
let myName = "ben";
myName[0] = "J";
console.log(myName); // "ben"

// We have to make copies
myName = myName[0].toUpperCase() + myName.slice(1);
console.log(myName); // "Ben"

// We can modify the length of Arrays to empty them
endLetters.length = 0;
console.log(endLetters); // []
