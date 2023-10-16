# Loops - Key Terms

- **Iteration** is the repetition of a process, getting closer to some result each time.
- `for` loops are best used to repeat a process a known number of times.

  - The **initialization** is where the loop begins
  - The **condition** must be `true` for the loop to continue
  - The **increment** determines what to change after each loop
  - The **body** is what gets executed with each iteration of the loop.

```js
const string = "hello world";
for (let i = 0; i < string.length; i++) {
  console.log(string[i], i);
}
```

- An **infinite loop** is one in which the condition is ALWAYS `true`

- `while` loops are best used to repeat a process an unknown number of times
- `break` prematurely breaks out of a loop
- `continue` prematurely goes to the iteration step of the loop

```js
const prompt = require("prompt-sync")({ sigint: true }); // for later

while (true) {
  const input = prompt("Enter a number or q to quit: ");
  if (input === "q") {
    console.log("Bye!");
    break;
  }
  if (Number.isNaN(Number(input))) {
    console.log("please enter a number");
    continue;
  }
  console.log(`${input}? That's a great number!`);
}
```

- A **nested loop** is a loop written inside the body of another loop. For each iteration of the outer loop, the inner loop will complete ALL of its iterations.

```js
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i.toString() + j.toString());
  }
}
/* 
00
01
02
03
04
10
11
12
13
14
*/
```
