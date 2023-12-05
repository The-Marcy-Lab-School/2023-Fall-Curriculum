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
  // - get the id of the form ("#new-todo-form") - DONE
  // - add an event handler
  // - extract data from form
  // - put data into an object
  const form = document.querySelector("#new-todo-form");
  form.addEventListener('submit', handleSubmit);
}

main();


/* 
Objective 1: create a form that can make a todo object

User input > object > render an element to the User Interface

Form ==> 
{ 
  title: 'take out trash', 
  uuid: 12345, // <-- NOT user generated
  isComplete: false // <-- NOT user generated
}
==> render a li

1. HTML renders
2. User inputs their information (the title of the todo)
3. User submits the form
4. JavaScript handles the form submission
5. create a new object based on the input data
  - get the id of the form ("#new-todo-form")
  - add an event handler
  - extract data from form
  - put data into an object
  
6. do something with that object (console log it / render it in the DOM)
*/