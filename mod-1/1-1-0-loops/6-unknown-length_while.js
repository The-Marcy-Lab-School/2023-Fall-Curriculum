const prompt = require('prompt-sync')({ sigint: true }); // for later

while (true) {
  const input = prompt('Enter a number or q to quit: ');
  if (input === 'q') {
    console.log('Bye!');
    break;
  }
  if (Number.isNaN(Number(input))) {
    console.log("please enter a number");
    continue;
  }
  console.log(`${input}? That's a great number!`);
}


// You can still use incrementor vars
// let round = 1;
// while (true) {
//   console.log(`${round}: go!`);
//   const input = prompt('Hit any key to continue or q to quit: ');
//   if (input === 'q') {
//     console.log(`We made it through ${round} rounds!`);
//     break;
//   }
//   round++;
// }