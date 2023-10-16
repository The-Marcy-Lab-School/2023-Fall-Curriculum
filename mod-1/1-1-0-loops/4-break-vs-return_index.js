const testBreak = () => {
  for (let i = 0; i < 11; i++) {
    if (i > 5) break;
    console.log(i);
  }
  console.log('I log!:');
};

const testReturn = () => {
  for (let i = 0; i < 11; i++) {
    if (i > 5) return;
    console.log(i);
  }
  console.log('I do not log:');
};