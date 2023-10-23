/** .map  */

const numbers = [10, 20, 30];

const callback = (val, idx, arr) => {
  console.log('cb: val, idx, arr', val, idx, arr);

  return val * 100;
};

const bigNumbers = numbers.map(callback);

console.log('bigNumbers: ', bigNumbers);

// cb logs: val, idx, arr 10 0 [ 10, 20, 30 ]
// cb logs: val, idx, arr 20 1 [ 10, 20, 30 ]
// cb logs: val, idx, arr 30 2 [ 10, 20, 30 ]

// bigNumbers:  [ 1000, 2000, 3000 ]