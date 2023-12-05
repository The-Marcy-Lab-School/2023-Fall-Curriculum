/* 
The main reason we store event handler callbacks in variables is
so that we can remove them down the road. Without a variable name
to reference the function, we cannot remove it.
*/

const handleCountClick = (e) => {
  e.target.dataset.count++;
  e.target.innerText = e.target.dataset.count;
};
const counterButton = document.querySelector("#counter");
counterButton.addEventListener('click', handleCountClick);


const removeListenerButton = document.querySelector("#remove-listener");
removeListenerButton.addEventListener('click', (e) => {
  // To remove an event listener, provide the event type and the handler
  counterButton.removeEventListener('click', handleCountClick);
})
