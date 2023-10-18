/* Destructuring is the process of defining variables
from existing Arrays / Objects
*/

const names = ['wendy', 'jon', 'daniel'];
const [mom, dad, brother] = names;
// console.log(mom, dad, brother);


const userBen = {
  name: 'ben',
  age: 28,
  canDrive: true,
  friends: ['maya', 'reuben', 'zo']
}
const { canDrive, friends, age, name } = userBen;


const introduceSelfDestructured = ({ name, age, canDrive }) => {
  // const { name, age, canDrive } = user
  console.log(`hello my name is ${name} and I am ${age} years old.`)
  if (canDrive) {
    console.log("I can drive")
  } else {
    console.log("I can't drive");
  }
}

const introduceSelf = (user) => {
  console.log(`hello my name is ${user.name} and I am ${user.age} years old.`)
  if (user.canDrive) {
    console.log("I can drive")
  } else {
    console.log("I can't drive");
  }
}

introduceSelf(userBen);
// hello my name is ben and I am 28 years old.
// I can drive
introduceSelf({ name: 'Maya', age: 30, canDrive: false });
// hello my name is Maya and I am 30 years old.
// I can't drive


// Destructuring an Array
const nolaCoords = ['30', '90']; // New Orleans

const printCoords = ([lat, long], city) => {
  console.log(`coordinates for ${city}`);
  console.log(`Latitude ${lat}, Longitude ${long}`);
}

printCoords(nolaCoords, 'New Orleans')