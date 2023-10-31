/* Scope Example
const myFunc = () => {
  // console.log(x); // 1
  if (true) {
    const a = '5';
    let b = 10;
    var c = true;
    x = 'hi'
    console.log(x); // 2
    if (true) {
      const z = 'hi';
    }
  }
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
  console.log(i);
}
myFunc();
console.log(x); // 4
*/

// What is printed? 
// Which represents pass by value? "Photocopy"
// Which represents pass by reference?
const add5ToNum = (num) => {
  num = num + 5; // num += 5
  return num;
}
let x = 5;
let y = add5ToNum(x);
console.log(x);
console.log(y);

const add5ToArray = (arr) => {
  arr.push(5);
  return arr;
}
let arr1 = [1, 2, 3, 4];
let arr2 = add5ToArray(arr1);
arr2.push(6);
console.log(arr1);
console.log(arr2);


const getRandomFloat = () => {
  return Math.random();
}
const rand = getRandomFloat();
console.log(rand);
