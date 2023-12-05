console.log("hello world!");
// add more code here!

// console.log(document);
// console.log(document.body);
// console.log(document.body.children);
// console.log(document.body.children[0]);

// returns the first p tag Element in the document
const firstP = document.querySelector('p');

// get the first Element belonging to the special-item class
const special = document.querySelector('.special-item');

// get the Element with the id main-list-heading
const heading = document.querySelector('#main-list-heading');

// get the first li Element inside the ol
const firstOrderedListItem = document.querySelector("ol > li:nth-child(1)")
firstOrderedListItem.remove();

const ul = document.querySelector('ul');

// creating html content (approach 1)
ul.innerHTML = `
  <li>coding</li>
  <li>basketball</li>
  <li>soccer</li>
`

// creating html content (approach 2)
const createLi = (text, parent) => {
  // 1. create
  const newLi = document.createElement('li');

  // 2. modify
  newLi.innerText = text;
  newLi.classList.add('special-item');
  newLi.style.background = 'grey';

  // 3. append / add
  parent.append(newLi);
}

createLi('cooking', ul)
createLi('reading', ul)
createLi('skiing', document.querySelector("ol"));


// console.log(special.innerHTML);
// console.log(ul.innerText);
// console.log(ul.innerHTML);
// console.log(firstP.innerText);

firstP.innerText = 'hey kaizen!';
firstP.classList.add('special-item')
firstP.id = 'kaizen';

const allListItems = document.querySelectorAll('li');
console.log(allListItems)
const firstThree = [...allListItems].slice(0, 3);
firstThree.forEach((item) => {
  item.innerText = 'woohoo!'
});

const colors = ['yellow', 'red', 'green', 'blue'];
colors.forEach(color => createLi(color, ul));
