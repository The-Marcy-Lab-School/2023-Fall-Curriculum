///////////////////////
// Event Propogation //
///////////////////////

/* 
Event Propagation (a.k.a bubbling) is when an event
triggered by a child is detected by the parent.

Two values to be aware of:
- event.target (the Element that fired the event)
- event.currentTarget (the Element handling the event)

To prevent events from bubbling up, use `event.stopPropagation()`
*/
const testPropagation = (event) => {
  console.log(`Event detected on #${event.target.id} (event.target)`);
  console.log(`Event handled by: #${event.currentTarget.id} (event.currentTarget)`);
}

document.querySelector('#outer').addEventListener('click', testPropagation);
document.querySelector('#middle').addEventListener('click', testPropagation);
document.querySelector('#inner').addEventListener('click', testPropagation);


//////////////////////
// Event Delegation //
//////////////////////

/* 
Event delegation refers to the process of using event 
propagation (bubbling) to handle events at a higher level 
in the DOM than the element on which the event originated

This means we can have a single event handler attached to
the parent and decide what to do based on the event.target
*/
const container = document.querySelector('#delegation-container');

// here we are using an inline arrow function for our event handler
container.addEventListener('click', (event) => {

  console.log('event detected on: ', event.target);
  console.log('event handled by: ', event.currentTarget);

  const display = document.querySelector('#delegation-display');
  if (event.target.matches('.arrow') === true) {
    display.innerText = `Button Pressed: ${event.target.innerText}`;
  }

  if (event.target.classList.contains('main')) {
    display.innerText = 'ooh the middle button was pressed!!!';
  }
})


/* 
In this example, the event listener is on the parent ul element.
It checks that the target was an li in the list...
If it was, it get the number shown by that li...
And creates a new li with that number + 1...
And appends it to the currentTarget (the ul)
*/
const ul = document.querySelector('#counting-list');
ul.addEventListener('click', (event) => {

  console.log('event detected on: ', event.target);
  console.log('event handled by: ', event.currentTarget);

  if (event.target.matches('li')) {
    const numberOfLiClicked = Number(event.target.innerText);
    const li = document.createElement('li');
    li.innerText = numberOfLiClicked + 1
    event.target.append(li);
  }
});