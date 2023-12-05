# 2.2.2 Lecture - Forms

**Q: What is a form and why is a form useful?**

## What is a form?
A form is a collection of labels and inputs that we can "submit" all at once in order to collect the data all at once. 

**Q: What kinds of data might we collect in a form?**

This is nice and convenient for us, but also html forms give us a *lot* of accessibility and features for free. Today we'll learn how to deal with forms. 

But first, when should we use a form? For all user input?

1. Click a button to pop open a tab with more data - use a `button`, not a `form`
2. A text input that filters the list of data shown - use an `input`, but not a full `form`
3. A link that takes the user to a new location - use an `anchor` or a `button`, not a `form`
4. Registering a new user with a name, password, and user details - use a `form`!

## Form Overview

Forms are made up of a few parts:
- `<form>`: the container for the form
  - `h2 (or other)`: A heading to describe your form
  - `<label>`: A label for each input
  - `<input>`: The inputs with the data. There are many types (text, radio, checkbox, etc...)
  - `<button>`: A button to submit the form

Below is a full example! For now, just focus on the Elements that are in the example (`form`, `h2`, `label`, `input`, `button`)
```html
<form id="mood-form" aria-label="mood-form">
  <h2 id="mood-form-header">What is your mood?</h2>
  <p> Tell us how you are feeling </p>

  <label for="current-mood">Current mood</label>
  <input type="text" id="current-mood" name="currentMood" placeholder="How are you feeling?">

  <label for="is-hungry">Are you hungry?</label>
  <input type="checkbox" id="is-hungry" name="isHungry">

  <button class="submit">Submit</button>
</form>
```

There are a lot of attributes to learn, particularly for `label` and `input`. We'll go over them but here are the essential new ones that we'll cover:
* `form` Elements have an `aria-label` for accessibility
* `input` Elements have a `type` attribute to determine the kind of input (text, number, color, etc...)
* `input` Elements have a `name` attribute which will be used to extract data from the form
* `input` Elements MUST have an `id` attribute
* `label` Elements MUST have a `for` attribute equal to the `input` Element's `id`. This connects them.

## Inputs
Inputs are where users can input their data. Each `input` Element has a type — the basic inputs are `"text"` or `"number"` but there are many more cool ones.

Here is an example (note we're missing `label`s!)

```html
<form aria-label="sign-up">
  <h2>Sign Up</h2>
  <input type="text" name="username">
  <input type="number" name="age">
  <input type="checkbox" name="isHungry">
  <input type="color" name="favoriteColor">
</form>
```

Some other types of inputs Elements (other than the literal `input` tag) are the `select` and `textarea` (and technically `buttons`). 

**Inputs must have a `name` attribute.** We'll use those later when we are getting data from the form when it is submitted.

## Labels
Labels are *crucial* for accessibility. 
* They provide text describing the input for screen readers
* Labels make it so that clicking a label will focus the input or check the checkbox.
* Labels help our seeing users too!

**You must have a label for every input.** 

Connect the label to the input with the `for` attribute. It should be the same as the input's `id`: 

```html
<form aria-label="sign-up">
  <label for="username-input">Username:</label>
  <input type="text" id="username-input" name="username">
  
  <label for="age-input">Age:</label>
  <input type="number" id="age-input" name="age">
  
  <label for="is-hungry-input">Are you Hungry?</label>
  <input type="checkbox" id="is-hungry-input" name="isHungry">
  
  <label for="favorite-color-input">Favorite Color:</label>
  <input type="color" id="favorite-color-input" name="favoriteColor">
</form>
```
> 💡 **Best Practice:** Use `kabob-case` for `id`/`for` and `camelCase` for `name`

## Submit button

All forms should end with a submit button.

```html
<form aria-label="sign-up">

  <!-- labels + inputs -->

  <button type="submit">Submit</button>
  <!-- type="submit" is optional here -->
</form>
```

By default `button` elements have a `type="submit"` so you don't *need* to put it. But you can if you want! There are other types of buttons we'll discuss later.

Clicking the submit button (or pressing enter while focused inside a form) will fire the `'submit'` event on the form. 

Our objective is to...
1. listen for this `'submit'` event
2. create an event handler that extracts the user input data
3. do something with that data! (save it in a database, show it in the UI, etc...)

## Original Form Submissions

But first...

Originally (and still with some frameworks) form submissions actually _change the page_.

See this difference by filling out the form in `1/old-form/original-way.html` which redirects the user to the new page after submitting. 

**Q: See how the URL changes to `results-page.html`? Notice the stuff appended to the end?**

```
results-page.html?username=ben&password=123
```

Old forms used a few attributes to achieve this behavior:
- `action` = the new page to go to
- `method` = `"get"` or `"post"` (`"get"` is default). `"get"` means we are requesting data using the form, `"post"` means we are sending data to be stored by the application
- The form data becomes “query params” in the URL of the new page if you use `"get"`

```html
<form action="./results-page.html" method="get">
  <!-- labels + inputs + submit button -->
</form>
```

This is the “default” behavior of the forms, which is NOT what we want. Instead of having the browser take us away from the page, let's stay on the same page and handle the `'submit'` event ourselves!

## The Modern Way

Again, our objective is to...
1. listen for this `'submit'` event
2. create an event handler that extracts the user input data
3. do something with that data! (save it in a database, show it in the UI, etc...)

Let's do it! 

```js
const handleSubmit = (e) => {
  // stop the reload/redirect
  e.preventDefault(); 

  // the FormData API makes it SUPER easy to get an object with all form data with 2 steps:
  const form = e.target;
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);

  console.log('here is your data:', formObj);
  // do something with formObj data...

  form.reset();
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
```

- `e.preventDefault()` stops the form submission from redirecting/reloading the page
- The `FormData` API is the best way to get data out of a form. The syntax is the same every time so copy it for now (but look into it on your own!)
- `form.reset()` empties out the form!

## Accessing form inputs by name
The quickest way is to just grab the input elements straight from the `form` Element:

```js
const form = e.target;
const { currentMood, color } = form;
console.log('color:', color.value, currentMood.value);
```

We're accessing these values using the `name` attribute of each `input`.

That's neat and will elegantly handle different types

## FormData API
This is neat too! It's got a *lot* going on, but all we need is this little trick:

```js
const form = e.target;
const formData = new FormData(form);
const formObj = Object.fromEntries(formData);
```

That essentially turns all our inputs into an object. Neat for fetching later.

## One annoying gotcha: checkboxes
When using checkboxes, you would think they'd use a `true`/`false` setup, but nope! They use `"on"` and `""` (empty string) OR the input just doesn't even exist on the `formObj`. 

So you'll need to do a little extra work to get them to be `true`/`false`:

```js
const form = e.target;
const formData = new FormData(form);
const formObj = Object.fromEntries(formData);
formObj.isHungry = form.isHungry.checked;
```

## Resetting
After you submit, sometimes you want to clear the form, so you can do that with `form.reset()` in the js, *or* on the form html itself, add a button with a type of reset

```html
<button type="reset">Reset</button>
```

Time: 10min<br/>
Total: 30min

## Input types
On the `index.html` go over the basic text inputs, but then also radio groups (with fieldsets and legends), and the select. Point out when to use them:
- `<input type="text">`: any open ended but short data
- `<input type="number">`: any number, min and max can lock you in (not featured on form, just mention)
- `<input type="radio">`: when you want to pick one of a few options
- `<textarea>`: any open ended but long data
- `<select>` and `<option>`: when you want to pick one of a *lot* of options

```html
<label for="favorite-fruit"> Choose your favorite fruit </label>
<select id="favorite-fruit" name="favoriteFruit">
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="orange">Orange</option>
</select>

```


## Tracking Input and Non Submission Events
You can use an `input` event on an input (or fieldset) to track the changes at a more granular level:

```js
// Input elements have a `.value` property holding the current value
const handleInput = (e) => {
  console.log('new value:', e.target.value);
};

// We can grab inputs whenever they change, not just submissions
const moodTextInput = document.querySelector('#current-mood');
moodTextInput.addEventListener('input', handleInput);
```

If you specify a type of `button` on a button, it will not trigger a submit automatically. This is a pretty rare occurrence, but it's good to know! 

HTML:

```html
<button type="button" id="normal-button">Capitalize Mood</button>
```

JS:

```js
// here's an example of an event fired by a button that does not trigger a submission
const capitalizeMood = (e) => {
  console.log('e.target:', e.target);
  const form = document.querySelector('form');
  
  // we can also use query selector to get this input, but if we used checkboxes or radio elements, using the form is easier
  form.elements.currentMood.value = form.elements.currentMood.value.toUpperCase();
};

const normalButton = document.querySelector('#normal-button');
normalButton.addEventListener('click', capitalizeMood);
```