import initialTodos from './todos.json';

//////////////////////////////////
// Generic localStorage Helpers //
//////////////////////////////////

// sets a new key-value pair in local storage.
const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

// tries to get a value from local storage.
const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(error);
    return null;
  }
};

///////////////////////
// Todo List Helpers //
///////////////////////

// sets the todos Array in localStorage with the key 'todos'
export const setTodos = (todos) => setLocalStorageKey('todos', todos);

// returns the Array of all todo Objects from localStorage
export const getAllTodos = () => getLocalStorageKey('todos');

// adds a new todo Object to the Array of todos in localStorage
export const addTodo = (todo) => setTodos([...getAllTodos(), todo]);

// finds a todo by uuid and replaces it with the given todo in localStorage
export const toggleTodoComplete = (uuid) => {
  const todos = getAllTodos();
  const todoToUpdate = todos.find((todo) => todo.uuid === uuid);
  todoToUpdate.isComplete = !todoToUpdate.isComplete
  setTodos(todos);
};

// finds a todo by uuid and removes it from the Array of todos
export const deleteTodo = (uuid) => {
  const todos = getAllTodos().filter((todo) => todo.uuid !== uuid);
  setTodos(todos);
};

// initializes todos using the todos.json file
export const initializeTodosIfEmpty = () => {
  if (!getAllTodos()) setTodos(initialTodos);
};
