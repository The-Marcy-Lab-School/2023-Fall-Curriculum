const string = 'hello world';
// for (let i = 0; i < string.length; i++) {
//   console.log(string[i], i);
// }
// note that we start on 0 and end on `< .length`

const indexOf = (str, letter) => {
  // if statement in a for loop
  for (let i = 0; i < str.length; i++) {
    // if the character at the current index of str === letter
    console.log('looking at ', string[i])
    if (str[i] === letter) {
      // if it is, return the current index 
      return i;
    }
  }
  return -1;
}
console.log(indexOf('hello world', 'x')); // 6










// iterate through a string
// const indexOf = (str, letter) => {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       return i;
//     }
//   }
//   return -1;
// }
// indexOf('hello', 'e'); // => 1
// indexOf('hello', 'l'); // => 2
// indexOf('hello', 'x'); // => -1