const arr = ['a', 'b', 'c'];

// add a value to the "tail" (the back)
const newLength = arr.push('d');
console.log('arr:', arr);
console.log('newLength:', newLength);


// remove the tail and save it
const removedTail = arr.pop();
console.log('arr:', arr);
console.log('removedTail:', removedTail);


// add a value to the "head" (the front)
const arr2 = [...arr1];
arr2.unshift('hi');
console.log('arr2:', arr2);


// remove the head and save it
const removedHead = arr2.shift();
console.log('arr2:', arr2);
console.log('removedHead:', removedHead);