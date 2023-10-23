/** forEach  */

const letters = ['a', 'b', 'c'];
const callback = (val, idx, arr) => {
  console.log('Value at index:', val);
  console.log('Current index:', idx);
  console.log('Original array:', arr);
};

letters.forEach(callback);
// Value at index: a
// Current index: 0
// Original array: [ 'a', 'b', 'c' ]
// Value at index: b
// Current index: 1
// Original array: [ 'a', 'b', 'c' ]
// Value at index: c
// Current index: 2
// Original array: [ 'a', 'b', 'c' ]

/** What's essentially happening under the hood  */
const fakeForEach = (arr, callbackFunction) => {
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]
    callbackFunction(value)
  }
}
