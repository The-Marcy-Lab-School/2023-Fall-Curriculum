// "Destructuring" is the act of creating variables
// from the contents of an Array/Object
const people = ['Wendy', 'Jon', 'Daniel'];
const [mom, dad, brother] = people;
console.log(mom);
console.log(dad);
console.log(brother);

const newOrleansCoords = ['30', '90'];
const [lat, long] = newOrleansCoords;
console.log(lat) // 30
console.log(long) // 90