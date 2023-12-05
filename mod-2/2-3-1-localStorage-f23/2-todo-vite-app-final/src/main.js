import './style.css';
import { v4 as uuidv4 } from 'uuid';
import {
  getAllTodos,
  initializeTodosIfEmpty,
  addTodo,
  toggleTodoComplete,
  deleteTodo
} from './data-layer-utils.js';

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
  `;

  form.reset();
}

// runner function
const main = () => {
  const form = document.querySelector("#new-todo-form");
  form.addEventListener('submit', handleSubmit);

  // Test the data layer:

  initializeTodosIfEmpty();
  console.log('Default Todos:');
  console.log(getAllTodos());
  // confirm that default todos were added

  addTodo({
    uuid: 1,
    title: 'trash',
    isComplete: false
  });
  console.log('Todo Added:');
  console.log(getAllTodos());
  // confirm new todo was added

  toggleTodoComplete(1);
  console.log('Todo 1 Updated:');
  console.log(getAllTodos());
  // confirm todo isComplete is now true

  deleteTodo(1);
  console.log('Todo 1 deleted:');
  console.log(getAllTodos());
  // confirm todo was deleted
}

main();

