/* 
A "pure" function is a function that 
1. always returns the same output, given the same input
2. has no "side-effects"

This function below changes a variable outside of its scope
*/
let sum = 5;
const addImpure = (a, b) => {
  sum = a + b;
  return sum;
}
console.log(addImpure(5, 3));
console.log(addImpure(2, 4));
console.log(sum);

sum = 10;
const addPure = (a, b) => {
  let sum = a + b;
  return sum;
}
console.log(addPure(5, 3)); // 8
console.log(addPure(2, 4)); // 6
console.log(sum); // 5



// So we know arrays are mutable.
const names = ['ben', 'maya', 'reuben'];
names[0] = 'gonzalo';
console.log(names);

// So functions like this aren't "pure"
const replaceFirst = (arr, value) => {
  arr[0] = value;
}
// replaceFirst(names, 'zo');

const replaceFirstPure = (arr, value) => {
  // arr = names
  // value = 'zo'
  const copy = [...arr] // copies the contents of arr into a new array
  // copy = arr.slice()
  copy[0] = value;
  return copy;
}
const newNames = replaceFirstPure(names, 'zo');
console.log('names is not affected now: ', names);
console.log('this is the copy: ', newNames);


console.log('-----a look at the spread operator-----')
console.log('whole array: ', names);
console.log('...names: ', ...names);
console.log('each name: ', names[0], names[1], names[2]);



// To create pure functions that utilize Arrays,
// we need to make copies of the array.
// There are two common ways
// const arr1 = ['a', 'b', 'c', 'd'];
// const arr2 = arr1.slice();
// const arr3 = [...arr1];
// console.log('arr1:', arr1);
// console.log('arr2:', arr2);
// console.log('arr3:', arr3);
