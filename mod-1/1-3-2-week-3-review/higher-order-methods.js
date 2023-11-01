/* 
forEach, filter, map, find, findIndex, every, some, reduce

map - if i need to transform EVERY value in my array
filter - if we want to reduce the number of values in the array (all ripe tomatoes)
find - get a single value (one ripe tomato)
forEach - do something with every value

I want an array with...
- just the names of every user (non-mutating) - map
- only user objects who can code (non-mutating) - filter
- only user objects who are in their thirties (non-mutating) - filter
- the user with the name "ben" (non-mutating) - find
- the first user who is in their thirties (non-mutating) - find
- capitalize the name of each user object (mutating) - forEach
*/

const nums = [1, 2, 3];
const doubled = nums.map((num) => {
  return num * 2 // this goes into the resulting array
});
const tripled = nums.map((num) => num * 3);
const quadrupled = nums.map((num) => num * 4);

const users = [
  { name: 'ben', age: 28, canCode: true },
  { name: 'william', age: 30, canCode: false },
  { name: 'michael', age: 32, canCode: true },
];
const onlyNames = users.map((user) => user.name) // ['ben', 'william', 'michael']
const onlyAges = users.map((user) => user.age);
console.log(onlyNames);
console.log(onlyAges);

const onlyThirtySomethings = users.filter((user) => user.age >= 30);
const namesOfThirtySomethings = users
  .filter((user) => user.age >= 30)
  .map((user) => user.name);

console.log(namesOfThirtySomethings)

const sumOfAges = users.reduce((total, user) => user.age + total, 0)
console.log(sumOfAges);







// const onlyThirtySomethings = filter(users, (user) => user.age > 30)


/* If we were to create these functions ourselves (you'll never have to) */
const filter = (arr, testCallback) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (testCallback(arr[i]) === true) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const map = (arr, modifyCallback) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const modifiedValue = modifyCallback(arr[i])
    // const modifiedValue = arr[i] * 2
    newArr.push(modifiedValue);
  }
  return newArr;
}


