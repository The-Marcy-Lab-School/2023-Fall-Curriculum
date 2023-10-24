const person = 'Zo';
const regEx = new RegExp('abc', 'g');
const greet = new RegExp(`Hi ${person}`, 'g');
console.log('greet.toString:', greet.toString());// to see the completed regex



const literal = /[^a-z]/g;
const wrong = /`${name}`/;
console.log('wrong.toString():', wrong.toString());


// .test() method
console.log(/[a-z]/.test('Hello!')); // true
console.log(/\d/.test('Hello!')); // false