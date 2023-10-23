const doubleAllNums = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = arr[i] * 2
    newArr.push(result)
  }
  return newArr;
}

const doubledNumsOld = doubleAllNums([1, 5, 10, 20]);

// or all of the above in one line
const doubledNums = [1, 5, 10, 20].map((num) => num * 2);

