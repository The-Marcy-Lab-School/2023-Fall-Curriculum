/* Deep vs. Shallow Clones */

const person1 = {
  name: 'ben',
  age: 28,
  friends: ['daniel', 'michael', 'william']
};

const person2 = {};
person2.name = person1.name;
person2.age = person1.age;
person2.friends = person1.friends;

person2.age = 29; // reassignment
person2.friends.push('jon'); // mutation

// console.log(person1);
// console.log(person2);

const ben = {
  name: 'ben',
  age: 28,
  canCode: true
}
const william = {
  name: 'william',
  age: 30,
  canCode: false
}
// const people = [ben, william];
// const peopleCopy = [...people];
// people[0].age++;
// console.log(people);
// console.log(peopleCopy);


/* Sort and callbacks */

const users = [
  { age: 4000, first_name: 'Pirate', last_name: 'Prentice' },
  { age: 28, first_name: 'Laszlo', last_name: 'Jamf' },
  { age: 30, first_name: 'Pig', last_name: 'Bodine' },
  { age: 30, first_name: 'Ben', last_name: 'Spector' },
];

const compareOneLine = (a, b) => a.age - b.age;

const age = 25 * 2;
console.log(age);

const compare = (a, b) => {
  if (a.age < b.age) {
    return -1; // a goes before b
  }
  if (a.age > b.age) {
    return 1; // a goes after b
  }
  return 0; // they are the same, order doesnt matter
}
users.sort(compare);
console.log(users);

/* TODO:
Create an array of 3+ people objects
Each object should have a name and an age
Sort them by age ascending
*/
