import './style.css';
import { v4 as uuidv4 } from 'uuid';

// helper functions
const handleSubmit = (e) => {
  // stop the reload/redirect
  e.preventDefault();

  // the FormData API makes it SUPER easy to get an object with all form data with 2 steps:
  const form = e.target;
  const formData = new FormData(form);
  const newTodo = Object.fromEntries(formData);

  newTodo.isComplete = false;
  newTodo.uuid = uuidv4();

  console.log('here is your data:', newTodo);
  // do something with formObj data...

  document.querySelector("#todos-list").innerHTML += `
    <li>${newTodo.todoTitle}</li>
  `

  form.reset();
}

// runner function
const main = () => {
  const form = document.querySelector("#new-todo-form");
  form.addEventListener('submit', handleSubmit);
}

main();
