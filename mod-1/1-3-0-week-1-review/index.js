const { getRandomIntInRange, PI } = require('./utils'); // local module
const prompt = require('prompt-sync')()             // node module

const flipCoin = () => {
  const coinFlip = getRandomIntInRange(0, 2) // 0 -> 1.9999
  if (coinFlip === 1) {
    console.log("heads");
  }
  else { // coinFlip === 0
    console.log("tails");
  }
}
const rollDice = () => {
  const diceRoll = getRandomIntInRange(1, 7)
  console.log(diceRoll);
}

console.log(`enter 1 for flipping a coin`)
console.log(`enter 2 for rolling a dice`);
const choice = Number(prompt("what do you want to do? "));
console.log(`your choice is ${choice}`);

if (choice === 1) {
  flipCoin();
} else if (choice === 2) {
  rollDice();
} else {
  console.log("sorry, not an option");
}



