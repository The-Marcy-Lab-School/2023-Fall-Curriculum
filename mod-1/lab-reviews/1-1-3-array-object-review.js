/* 
Arrays vs. Objects
Iterating through Arrays and Objects
Object destructuring
Array Methods
Shallow vs. Deep Cloning
JSON
*/


/* 
Similarities between Arrays and Objects?
What are the differences? When would you use an Array? When would you use an Object?
- both store a list of data
- arrays: data has to be ordered by index
- objects: data does not have to be ordered
- accessing arrays you have to use the index
- accessing objects you have to use dot notation
- Use an array when you know that the order does matter
- Use an object when you are creating "things"

- Arrays are collections of "similar" data values
- Objects are collections of "related" data values

Arrays are just objects whose keys are numbers, starting at 0
 */

const names = [
  'wendy',  // 0: 'wendy' 
  'jon',    // 1: 'jon'
  'daniel'  // 2: 'daniel'
]

// [name] is in my family
for (let i = 0; i < names.length; i++) {
  console.log(`${names[i]} is in my family`)
}
names.forEach((name) => console.log(`${name} is in my family`))

const userBen = {
  'name': 'ben',
  'age': 28,
  'canDrive': true,
  'family': names,
  'key': 'value'
};

// unary - typeof 'string', !true
// binary - (a + b) + c
// ternary - (condition ? firstValue : secondValue)

// console.log(typeof names); // 'object'
// console.log(typeof userBen); // 'object'
// console.log(typeof 5);
// console.log(typeof "5");
// const allKeysInUserBen = Object.keys(userBen);
// const allValuesInUserBen = Object.values(userBen);
// console.log(allKeysInUserBen);
// console.log(allValuesInUserBen);


// console.log(names[0]); // wendy
// console.log(userBen.name); // ben
// console.log(userBen['name']); // ben

const printObjectValue = (obj, key) => {
  console.log(obj[key])
  console.log(obj.key) // this doesn't work
  console.log(obj['key']) // this doesn't work
}
// printObjectValue(userBen, 'canDrive'); // true
// printObjectValue(userBen, 'age'); // 28
// printObjectValue(names, 0); // 28

const userDaniel = {
  name: 'daniel',
  age: 34,
  canDrive: true,
  family: names
};
const users = [userBen, userDaniel];

console.log(users);
console.log(users[0].family[1]);
console.log(users[1]['family'][1]);

// 1. go into userBen - index 0 of users
// 2. go into family - family property of userBen
// 3. go to 'jon' - 



const myOutfit = {
  shirt: {
    colors: {
      mainColor: 'washed black',
      accents: ['gold', 'red', 'green']
    },
    brand: 'p&co',
    sleeveLength: 'short'
  },
  pants: {
    color: 'black',
    brand: 'rag n bone',
    type: 'jeans',
  },
  shoes: {
    color: 'white',
    brand: 'nike',
    type: 'air forces'
  }
}
console.log(myOutfit.shirt.colors.accents[1])