/* 
Storing data in a user's `localStorage` is like storing data in an Object. Every **value** we store is associated with a **key**.

* We store (set) values using `localStorage.setItem(key, valueString)`
* We retrieve (get) values using `localStorage.getItem(key)`

Note: `localStorage` can only store strings which we have to watch out for.
*/
const basicLocalStorage = () => {
  localStorage.setItem('luckyNumber', 13);
  localStorage.setItem('favoriteColor', 'purple');

  const storedNumber = localStorage.getItem('luckyNumber');
  const storedColor = localStorage.getItem('favoriteColor');

  console.log('storedNumber: ', storedNumber);  // 13
  console.log('storedNumber: ', storedColor);   // purple
  console.log('storedNumber type: ', typeof storedNumber);  // string
  console.log('storedNumber type: ', typeof storedColor);   // string
}
basicLocalStorage();


/* 
Problem: .toString() doesn't work well with Arrays/Objects
Solution: but JSON.stringify() does!
*/
const toStringVsStringify = () => {
  const num = 13
  const bool = true
  const str = 'purple'
  const arr = [1, 2, 3]
  const obj = { name: 'ben' }
  console.log(num.toString())  // '13'
  console.log(bool.toString()) // 'true'
  console.log(str.toString())  // 'purple'
  console.log(arr.toString())  // '1,2,3'
  console.log(obj.toString())  // '[object Object]'

  console.log(JSON.stringify(arr)); // [1, 2, 3]
  console.log(JSON.stringify(obj)); // { name: 'ben' }
}
// toStringVsStringify();



/* 
Problem: only string values work with localStorage
Solution: JSON.stringify() and JSON.parse()
*/
const stringifyAndParse = () => {
  const instructors = ['ben', 'gonzalo', 'motun', 'zo', 'carmen'];
  const user = { name: 'ben', canCode: true };

  // We typically will JSON.stringify() the value before we set it... 
  localStorage.setItem('instructors', JSON.stringify(instructors));
  localStorage.setItem('user', JSON.stringify(user));

  // ...and JSON.parse() the value when we get it:
  const storedInstructors = JSON.parse(localStorage.getItem('instructors'));
  const storedUser = JSON.parse(localStorage.getItem('user'));

  console.log('storedInstructors:', storedInstructors);
  console.log('storedUser:', storedUser);
}
// stringifyAndParse();
