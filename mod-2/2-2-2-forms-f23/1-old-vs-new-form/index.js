const handleSubmit = (e) => {
  e.preventDefault();

  // grab the form Element
  const form = e.target;

  // For super simple forms, you can also just grab it by input name on the form:
  const { color, currentMood, isHungry } = form
  console.log('color:', color.value);
  console.log('currentMood: ', currentMood.value);
  console.log('isHungry: ', isHungry.checked);

  // the FormData API makes it SUPER easy to get an object with all form data with 2 steps:
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);

  // checkboxes have to be added separately
  formObj.isHungry = form.isHungry.checked;

  console.log('here is your data:', formObj);

  form.reset();
}

const newWayForm = document.querySelector('#new-way');
newWayForm.addEventListener('submit', handleSubmit);


// TRACKING INPUT EVENTS -------------------------------------------
// Input elements have a `.value` property holding the current value
const handleInput = (e) => {
  console.log('new value:', e.target.value);
};
// We can grab inputs whenever they change, not just submissions
const moodTextInput = document.querySelector('#current-mood');
moodTextInput.addEventListener('input', handleInput);

// If using a fieldset, attach it there, not the inputs
const fieldset = document.querySelector('fieldset');
fieldset.addEventListener('input', handleInput);


// NON SUBMITTING BUTTONS ----------------------------------------
// here's an example of an event fired by a button that does not trigger a submission
const capitalizeMood = (e) => {
  console.log('e.target:', e.target);
  const form = document.querySelector('#new-way');
  // can also use query selector, but if we used checkboxes 
  // or radio elements, using the form is easier
  form.elements.currentMood.value = form.elements.currentMood.value.toUpperCase();
};

const normalButton = document.querySelector('#normal-button');
normalButton.addEventListener('click', capitalizeMood);
