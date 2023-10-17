// for of is a more concise iteration syntax
const people = ['carms', 'zo', 'itzel'];

for (let i = 0; i < people.length; i++) {
  const person = people[i];
  console.log(person);
}

// same readability, but less code
for (const person of people) {
  console.log(person);
}