// destructuring
const greetPerson = (person) => {
  const { name, age } = person;
  console.log(`Hello, ${name}! You are ${age} years old.`);
};

// destructure arg directly
const greetPersonShort = ({ name, age }) => {
  console.log(`Hello, ${name}! You are ${age} years old.`);
};