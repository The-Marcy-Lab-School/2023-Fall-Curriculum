# 2-2-0-intro-to-dom-f23

An intro to the DOM

[Slides](https://docs.google.com/presentation/d/1_4N1KPajA6HE1EPrmQ5n8ruOYVSNBp5WYl3BcPClc-U/edit?usp=sharing)

## The Chrome Developer Tools

Open with <kbd>f12</kbd> or by right-clicking and selecting _inspect_.

The Chrome Developer Tools allow us to interact with the source code of the page. We can
* Use the _Elements_ tab to view and manipulate the DOM
* Use the _Console_ tab to view `console.log` messages printed from the JS
* Use the _Network_ tab to view loaded assets

## Linking JS files to HTML

There are lots of ways to add a script we'll go over later, for now this is easiest

```html
<body>
  <!-- other html code -->
  <!-- Put this just before the end of the body -->
  <script src="./index.js"></script>
</body>
```

In that `index.js` file, place a `console.log` statement and view it in the _Console_ tab of the Chrome Developer Tools each time you reload the webpage.

Try the following code:

```js
const fruits = [
  { name: 'apple', color: 'red' },
  { name: 'banana', color: 'yellow' },
  { name: 'mango', color: 'orange' },
];

// Use the arrows to pop open objects
console.log('click to expand!', fruits);

// can do tricks the node console can
console.table(fruits);
```

**Q: Why does the `script` tag need to go at the end of the body?**

## The `document` object

The `document` object _is_ the DOM packaged in an object.

The `document` object has create/read/update/delete (CRUD) properties and methods for interacting with the DOM.

```js
console.log(document);
console.log(document.body);
console.log(document.body.children);
console.log(document.body.children[0]);
```

## Selecting Single Elements in the DOM (Read)

There are many other ways to grab an Element from the DOM, but `querySelector` is the most flexible. It uses CSS selector syntax

```js
// returns the first p tag Element in the document
const firstP = document.querySelector('p');

// get the first Element belonging to the special-item class
const special = document.querySelector('.special-item');

// get the Element with the id main-list-heading
const heading = document.querySelector('#main-list-heading');

// get the first li Element inside the ol
const firstOrderedListItem = document.querySelector("ol > li:nth-child(1)")
```

More Reading: [w3Schools](https://www.w3schools.com/js/js_htmldom_elements.asp)

## Modifiying Elements in the DOM (Update / Delete)

Once an Element is grabbed from the DOM, we can modify it, and even delete it!

```js
const heading = document.querySelector('#main-list-heading');
heading.innerText = 'hello world!';
heading.id = 'blahblah';
heading.classList = "vivid purple";

const firstOrderedListItem = document.querySelector("ol > li:nth-child(1)")
firstOrderedListItem.remove();
```

More Reading: [w3Schools](https://www.w3schools.com/js/js_htmldom_html.asp)

## Selecting Multiple Elements (Read)

Use `document.querySelectorAll()` to grab multiple elements

```js
// get all li Elements in a NodeList
const listItems = document.querySelectorAll('li');

// get all Elements with the class special-item
const specialItems = document.querySelectorAll('.special-item');
```

`querySelectorAll` returns a `NodeList` which is NOT an array. You can use bracket notation but you can't use normal Array methods.

```js
const listItems = document.querySelectorAll('li');
listItems[0].innerText = 'i love coding!' // changes the first list item's inner text

// try to get the first 3 values --> ERROR: listItems.slice is not a function
listItems.slice(0, 3);

// Spread into an Array first!
const firstThree = [...listItems].slice(0,3)
```

## Creating Elements (Create)

The pattern:
1. **Create**: `const newEl = document.createElement('div')`
2. **Modify**: add an id, class, and text, whatever
3. **Add**: `parentEl.append(newEl)`

```js
// 1. Create
const newLi = document.createElement('li');

// 2. Modify
newLi.innerText = 'i love coding!';
newLi.classList.add('special-item');

// 3. Add
const ul = document.querySelector('ul'); // the parent
ul.append(newLi);
```