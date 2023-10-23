/** Advanced */

// Don't forget about more arguments!
const multByIndexAndLength = [1, 2, 3, 4, 5]
  .map((num, idx, arr) => num * idx * arr.length);

// chaining
const myNums = [1, 2, 3, 4, 5];
const numValuesBiggerThan12WhenTripled = myNums
  .map((num) => num * 3)
  .filter((num) => num > 12)
  .length

console.log(numValuesBiggerThan12WhenTripled);
// 1

// advanced Reduce example
const repeaters = [1, 2, 4, 2, 3, 1, 4, 6, 2];
const frequencyCounter = (acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
};

const frequencies = repeaters.reduce(frequencyCounter, {});
console.log('frequencies', frequencies);
// frequencies { '1': 2, '2': 3, '3': 1, '4': 2, '6': 1 }

// more HOFs
const hasAtLeastOneEven = myNums.some((num) => !(num % 2));
console.log('hasAtLeastOneEven', hasAtLeastOneEven);
// hasAtLeastOneEven true