/*
Today we are learning about a new way to INVOKE functions. It involves two key programming concepts: 
- callback functions!
- higher-order functions
*/

const square = (num1) => num1 ** 2; // num * num

/* What does this log? */
// console.log('square(4):')
// This expression square(4) returns 16
// console.log(square(4));
// console.log(4 ** 2);

/* What is different about this? What does it log? */
// console.log('square:')
// console.log(square);

/*
Ask yourself: Why would JavaScript allow us to just
reference a function without calling it?
*/

/** Part 2 */
// console.log(`Ben said, "HELLO!"`)
// console.log(`Zo said, "YO!"`)
// console.log(`Carmen said, "...hi..."`)
// console.log(`Maya said, "...let us meditate..."`)

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

// greet('Ben', 'hello', 'loud');
// greet('Zo', 'yo', 'loud');
// greet('Carmen', 'hi', 'quiet');
// greet('Maya', 'let us meditate', 'quiet');
// greet('Motun', 'heyyyy', 'scream'); // doesn't work :(


/* These are "Callback" Functions */
const yell = (msg) => msg.toUpperCase() + '!!!'
const whisper = (msg) => `...${msg.toLowerCase()}...`
const ask = (msg) => `${msg}?`

/* This is a "higher order function" (HOF) */
const greetBetter = (person, msg, voiceCallback) => {
  const formattedMsg = voiceCallback(msg);
  const result = `${person} said, "${formattedMsg}"`
  console.log(result);
}
// greetBetter('Ben', 'Hello World', yell);
// greetBetter('Ben', 'Hello World', whisper);
// greetBetter('Ben', 'Hello World', ask);

/* we can use "inline arrow functions" */
// greetBetter('Ben', 'Hello World', (msg) => `${msg}$*(#@?!)`)

/** Part 4: Practice  */

const doubleArrayNumbers = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = arr[i] * 2
    newArr.push(result)
  }
  return newArr;
}

const multiplyArrayNumberByIndex = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = arr[i] * i
    newArr.push(result)
  }
  return newArr;
}
/* Both functions... are "Mapping" functions
- initialize an array
- for loop that go over the input arr length
- modify arr[i] in some way
- we push the result into the new array
- return the new array
*/

const map = (arr, modifyCallback) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(modifyCallback(arr[i]))
  }
  return newArr;
}
// what would a callback for this look like?
// how would you invoke this HOF
const nums = [1, 2, 3, 4, 5];
const addThree = (num) => num + 3;
const expo2 = (num) => num ** 2;
const subtractOne = (num) => num - 1;
const multiplyByTen = (num) => num * 10;
const divide = (num) => num / 2;
const cube = (num) => num ** 3;
// console.log(map(nums, (num) => num));
// console.log(map(nums, divide));


const family = ['wendy', 'jon', 'daniel'];
const allCapsFamily = map(family, (name) => name.toUpperCase())
// console.log(allCapsFamily);


/** Part 5: Sort */

const names = ['Sara', 'Alex', 'zo', 'jane']
const numbers = [9, 3, 4, 13, 10]

// console.log('Names:', names);
// console.log('Numbers:', numbers);

// names.sort();
// numbers.sort();

// console.log('Names sorted:', names);
// console.log('Numbers "sorted":', numbers);

/* How the callback works */
// numbers.sort((value1, value2) => {
//   if (value1 > value2) return -1  // any positive
//   if (value1 < value2) return 1 // any negative
//   return 0                       // 0 if equal
// });
// console.log(numbers);

/* make a copy before sorting to avoid mutating the original */
const sorted = [...names].sort((name1, name2) => {
  //.. sorting logic
})

/* Other higher order functions */
// console.log(numbers.some((value) => value < 10)); // true
// console.log(numbers.every((value) => value < 10)); // false


// /* The actual version you'll use */
// numbers.sort((a,b) => a - b); // ascending
// numbers.sort((a,b) => b - a); // descending

// /* watch out for mutation vs copying, here's how to copy */
// const unsortedNumbers = [8, 2, 3, 12, 11]
// const sorted = [...unsortedNumbers].sort((a,b) => a - b)
// console.log('--------------')
// console.log('Unsorted:', unsortedNumbers);
// console.log('sorted', sorted);

/** Part 6: Sort Practice */

// const myNums = [9, 3, 4, 13, 10]
// console.log('Numbers:', myNums);

// myNums.sort((a,b) => a - b);
// console.log('Numbers Ascending:', myNums);

// myNums.sort((a,b) => b - a);
// console.log('Numbers Descending:', myNums);

// /* Sort an array of strings */
// const myNames = ['Sara', 'Alex', 'zo', 'jane']
// console.log('Names:', myNames);

// myNames.sort();

// console.log('Names sorted:', myNames);

// /* Sort an array of objects by a property */
// const people = [
//   { name: 'Jay', age: 24 },
//   { name: 'Jack', age: 81},
//   { name: 'Sara', age: 21},
//   { name: 'Zo', age: 34},
// ]

// console.log('Sorted people by age:', people.sort((a,b) => a.age - b.age))

// console.log('Sorted people by name:', people.sort((a,b) => {
//   if (a.name === b.name) return 0;
//   return a.name > b.name ? 1 : -1;
// }));
