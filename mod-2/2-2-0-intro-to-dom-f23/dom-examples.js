console.log('\n getElementById-------');
const mainHeading = document.getElementById('main-heading')
console.log('Click to expand!', mainHeading);
console.log('mainHeading id:', mainHeading.id);
console.log('mainHeading text:', mainHeading.textContent);

console.log('\n querySelector-------');
const subHeading = document.querySelector('#sub-heading')
console.log('subHeading.textContent:', subHeading.textContent);

console.log('\n querySelectorAll-------');
const listItems = document.querySelectorAll('li');
console.log('listItems:', listItems);

// ERROR! Node Lists are not arrays, just array *like*
// console.log(listItems.map((item) => item.textContent));


// convert to an array (or use for loop with indexes)
const listItemsArrayOld = Array.from(listItems);
const listItemsArray = [...listItems];

// pattern:
// create new element
// modify it
// append it to the DOM
const createNewH3 = (parentEl, text) => {
  const newH3 = document.createElement('h3');
  newH3.textContent = text;
  parentEl.append(newH3);
}

// append to the end
createNewH3(document.body, 'Hello from JS!');

// append to the surprise div
const surpriseDiv = document.querySelector('#surprise');
console.log('surpriseDiv:', surpriseDiv); // always check to see if you grab what you think you did
createNewH3(surpriseDiv, 'Surprise!');

const alterText = (el, text) => {
  el.textContent = text;
}

alterText(mainHeading, 'Hello from JS!');