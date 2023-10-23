/* Making regexs */

/* constructor */
const person = 'Zo';
const regEx = new RegExp('abc', 'g');
const greet = new RegExp(`Hi ${person}`, 'g');
// console.log('greet.toString:', greet.toString()); // to see the completed regex


/* literal */
const literal = /[^a-z]/g;
const wrong = /`${name}`/;
// console.log('wrong.toString():', wrong.toString());


/* .test() method */
// console.log(/[a-z]/.test('Hello!')); // true
// console.log(/\d/.test('Hello!')); // false


/* Build a better version of this function */
// const isOnlyAphaNumericOld = (str) => {
//   if (!str.length) return false;
//   const alphaNumericOptions = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';
//   for (let i = 0; i < str.length; i++) {
//     if (!alphaNumericOptions.includes(str[i])) {
//       return false;
//     }
//   }
//   return true;
// };

const isOnlyAphaNumeric = () => {}
