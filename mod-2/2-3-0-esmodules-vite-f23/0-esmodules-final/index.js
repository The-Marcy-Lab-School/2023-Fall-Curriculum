import { test } from './other.js'
console.log("hello from index.js");

const main = () => {
  document.querySelector('h1').textContent = 'Coding is the best';

  console.log(test);
}

main();