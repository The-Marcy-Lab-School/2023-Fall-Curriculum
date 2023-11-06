# Lecture Prep 2.0.1 - Intro To CSS

**Table of Contents**

* [What is CSS?](#what-is-css)
* [Linking/Loading CSS Files](#linkingloading-css-files)
* [Anatomy of CSS](#anatomy-of-css)
* [Selectors](#selectors)
* [Selector Specificity](#selector-specificity)
* [Box Model](#box-model)
* [Common CSS Tricks](#common-css-tricks)
  * [Relative Units: rems](#relative-units-rems)
  * [removing list styles](#removing-list-styles)
  * [Centering things](#centering-things)
  * [Image Fitting](#image-fitting)

## What is CSS?

* **CSS** stands for **Cascading Style Sheets**
* **CSS rules** tell our browser how to display our HTML
* You can **select** elements on the page by tags, ids, classes, and more, and then apply styles to them.

```css
p.vivid {
  color: purple;
  font-family: Helvetica;
  font-weight: bold;
}
```

> CSS let's us say "I want all paragraph elements with the class "vivid" to have purple bold text in Helvetica font.
 
* The browser already has some **default styles** but we can override those styles with our own. 
* We can change the **color**, the **size**, the **font**, the **position**, and more of any element on the page.

**Q: The tags `h1`, `h2`, and `p` all have different default styles. How are they different?**

<details><summary>Answer</summary>

Among other things, `h1` and `h2` elements are both bold compared to `p`. 

`h1` elements have larger font than `h2` elements which have larger font than `p` elements.

</details>

## Linking/Loading CSS Files

* CSS rules are written in `.css` files
* A `.html` file must load the `.css` file in order for the CSS rules to be applied
* A `<link rel="" href="" />` tag is used:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css"> 
    <!-- ^ This link tag is how we apply CSS to an HTML page -->
    <!-- It should go in the head -->
  </head>
  <body>
    <!-- body content -->
  </body>
</html>
```

* The `rel` (relevance) attribute tells the browser what kind of file is being linked (other file types can also be loaded using this tag)
* The `href` (hyperlink reference) attribute is an absolute/relative path to the `.css` file

> 💡 Tip! Test your connection with a few super obvious rules in the CSS file to make sure it's actually changing the HTML appearance. For example, make the `body` have a purple background!

**Q: There are a few things wrong with the way this HTML file is trying to load the `styles.css` file. What are they?**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <p>Hello World!</p>  
    <link href="stylesheet" rel="./styles.css"> 
  </body>
</html>
```

<details><summary>Answer</summary>

1. The `link` tag should be in the `head`, not in the `body` because it is meta information, not content to be displayed
2. The `rel` and the `href` attributes are backwards. `href` should be a file path to the `.css` file and `rel` should be the relevance of the resource being linked.

</details>

## Anatomy of CSS

* A CSS rule is made up of a **selector** and a **declarations** 
  * the **selector** is what chooses the element(s) that will be styled
  * the **declarations** are the actual styles that will be applied

![Alt text](./lecture/images/css-anatomy-of-a-rule.png)

* Declarations are made up of key/property and value pairs (just like an object)
* each declaration MUST end with a semicolon (unlike an object)
* Styles can be commented out by doing `/* */`

```css
/* This is a CSS Comment */

/* one line is okay */
p { color: red; text-align: left; } 

/* Most of the time we spread it out */
h1 { 
  color: blue;
  text-align: center;
}
```

**Q: What is wrong with the CSS syntax below?**

```css
{
  color: red;
  text-align: right;
}

h2 [ color: white; font-family: Arial; ]

p {
  font-weight: bold
  margin: 10px
}
```

<details><summary>Answer</summary>

1. In the first CSS rule, there is no selector.
2. In the second rule, `[]` are used instead of `{}`
3. In the third rule, the declarations need to end with semicolons.

</details>

## Selectors

* There are TONS of ways to select elements with CSS rules ([list of all the selectors](https://www.w3schools.com/cssref/css_selectors.php)). The most common selectors are:
  * By tag (select all `p` elements)
  * By class name (select all elements with `class="blue"`)
  * By id name (select the element with `id="email-form"`)
  * Or some combination of these things

```css
/* Select all paragraph elements */
p { 
  font-family: fantasy;
  font-size: 20px;
}

/* Select all elements with class="blue" */
.blue {
  color: blue;
}

/* Select all p elements with class="blue" */
p.blue {
  font-style: italic;
}

/* Select the element with id="special" */
#special {
  background: yellow;
}
```

* You can also select children tags of a particular parent tag

```css
/* selects all li tags that are in ul tags that have the class="links" attribute */
ul.links-list > li {
  color: black;
}
```

* **Pseudo-classes** refer to a special state of the selected element(s)

```css
a { color: black; }
a:visited { color: purple } /* a link once a user has visited the page */
a:hover { color: red } /* a link when the mouse hovers over it */
a:active { color: blue; } /* a link the moment it is clicked */
```

**Q: How would you make all `p` tags blue? How would you make only the `p` tags with `class="fun"` green? How would you make the second `p` tag `orange`?**

```html
<p class='fun'>first</p>
<p class='fun' id='super-fun'>second</p>
<p>third</p>
```

<details><summary>Answer</summary>

```css
p {
  color: blue;
}

.fun {
  color: green;
}

#super-fun {
  color: orange;
}
```

</details>

## Selector Specificity
* **Selector specificity** determines how conflicting style rules are resolved
* By default, "cascading" means that the rule that comes later, wins!

```css
p {
  color: red;
}

p {
  color: blue;
}
```

* CSS is read top-to-bottom and the last CSS rule said to make all `p` tags blue.

* The more selectors you add, the more specific the rule is, and the more it will override other rules.
  * `id` >  `class` > tag name

```css
p#subtitle {
  color: red;
}

p {
  color: blue;
}
```

* Now, the `p` with the `id="subtitle"` attribute will be red, because it's more specific than the selector `p`. 

**Q: What will be the color of paragraph?**

```html
<p class='fun'>Hello World</p> 
```
```css
.fun {
  color: orange;
}
p.fun {
  color: blue;
}
p {
  color: red;
}
#its-purple {
  color: purple
}
```

<details><summary>Answer</summary>

It will be blue! The selector `p.fun` is the most specific selector that applies to this element.

</details>


## Box Model

* The **box model** is how the browser calculates the size of an element. 
* It's made up of the **content**, **padding**, **border**, and **margin**. 

![Alt text](./lecture/images/margin-padding-content.png)

* By default, `width` and `heigth` refer to the size of the _content box_

```css
img {
  width: 200px;
  /* let the height be automatically determined by the image's dimensions */
  padding: 10px;
  margin: 10px;
  border: 5px solid black;
}
```

* **Total width** and **total height** is calculated as the sum of the content, padding, border, and margin.

**Q: what is the width of the `img` element based on the CSS above?**

<details><summary>Answer</summary>

A 200px wide element with 10px padding and 10px margin will actually be 220px wide.

</details><br>

**Q: What issues might this cause?**

<details><summary>Answer</summary>

To specifically set the size of an element, we have to be aware of all four properties of the box model.

</details><br>

#### Solution: Border Box "Reset"

* A **reset** is a CSS rule (or set of rules) that change one or more default styles for the entire document.
* Here, we override the default box-model sizing by setting the `box-sizing` property to `border-box` using the universal selector (`*`)

```css
* {
  box-sizing: border-box;
}
```


* This will make the `width` and `height` properties set the _total width_, not the content box width. The content box will squish down to the space remaining.

* Learn more here: https://css-tricks.com/box-sizing/

**Q: What will the total width of the `img` element be after applying the CSS rules below? What will the width of the content box be?**

```css
* {
  box-sizing: border-box;
}
img {
  width: 200px;
  padding: 10px;
  margin: 10px;
  border: 5px solid black;
}
```

<details><summary>Answer</summary>

The width of the entire `img` will be `200px` but the width of the image's content box will be `170px`.

</details>

## Common CSS Tricks

### Relative Units: `rems`

* The browser has a **base font size**, typically 16 pixels by default. 
* This can be adjusted in accessibility settings for people who need larger font sizes.
* The `px` size unit ignores the browser's settings on base font size
* Use the `rem` unit to set font size relative to the base font size.
  * `1rem` is the same as what the browser sets as the root font size.
  * If the base font size is `16px`, then `1.5rem` will be 24 pixels and `2rem` will be `32 pixels`
  * This is a good way to make sure your site is accessible to people who need larger font sizes.

**Q: A user sets their font size to "extra-large" which changes the base font size to `32px`. What will the size of an element with `font-size: 2rem;` be in pixels?**

<details><summary>Answer</summary>

`1rem` is equal to the base font size of `32px` so `2rem` will be `64px`.

</details>

### removing list styles

* Below is a common "reset" style for unordered lists. 
* The `ul` element is typically used to store links in a navigation bar. Understandably, we don't want bullet points in our nav bars.

```css
ul {
  list-style: none;
  padding: 0;
}
```

### Centering things

* We'll learn more about positioning later, but a fun intro is auto centering "block level" elements like `div`s.

```css
div {
  margin: 0 auto;
  /* margin-top: 0 */
  /* margin-bottom: 0 */
  /* margin-left: auto */
  /* margin-right: auto */
}
```

* This will auto-increment the side margins to make sure they are even and the item is centered horizontally on the page.

```css
p {
  text-align: center;
}
```

* For inline elements, like text, you can use `text-align: center;` to center the text inside the element.

### Image Fitting

* Specify *one* height or width to get the image to maintain it's natural aspect ratio. 
* If you specify both, it will stretch the image to fit the box, which may not be what you want.

### Homework

So css has so many selectors, and it's helpful to know what they are! That's why the HW tonight is a game that runs through an incredible amount of them. There are lots of CSS properties to learn as well, but looking them up is simple. If you figure out how to *select* something, you'll be ok!

And remember, simplest is better. Writing your HTML to just include an id or class on a crucial element is better than trying to make some crazy selector. It's easier to read, and easier to maintain.

**Link:** https://flukeout.github.io/
**Goal:** Complete up to level 20. Take a screenshot/picture and upload it to Canvas.

