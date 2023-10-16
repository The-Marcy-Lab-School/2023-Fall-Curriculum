// console.log(noHoist) // ERROR
const noHoist = "Remember, const/let don't hoist"

// sayHi() // ERROR
const sayHi = () => {
  console.log('hi');
}

// sayHi2() // ERROR
const sayHi2 = function() {
  console.log('hi');
}

sayHi3(); // This is ...totally fine?
function sayHi3() {
  console.log('hi');
}
