# HTML - Key Terms

* [First, an Experiment](#first-an-experiment)
* [The Browser is an HTML Viewer](#the-browser-is-an-html-viewer)
* [Live Server](#live-server)
* [What is HTML?](#what-is-html)
* [HTML Elements](#html-elements)
* [Nesting Elements](#nesting-elements)
* [Self Closing Tags](#self-closing-tags)
* [Opening Tag Attributes & Images](#opening-tag-attributes--images)
* [Ids and Classes](#ids-and-classes)
* [Links](#links)
* [Properly formatted document](#properly-formatted-document)
* [Semantic vs Non Semantic Elements](#semantic-vs-non-semantic-elements)

## First, an Experiment

* In your `unit-2` folder, create a new folder called `intro-to-html`
* Create two files called `index.txt` and `index.html`
* Put this inside both of them:

```html
Hello World

<h1>Hello World</h1>
```

* Open your browser
* Press the "file open" keyboard-shortcut <kbd>Command+o</kbd> (Mac) / <kbd>Control+o</kbd> (Windows) 
* Find and select your `index.html` file. Then do the same for your `index.txt` file. 

> On WSL, your files will be located under _Linux_ in the File Explorer
>
> ![Alt text](./img/file-explorer-linux.png)

**Q: What is different about how the browser shows the `.txt` and `.html` files?**

## The Browser is an HTML Viewer

* **Your browser is essentially built to render text and images.** 
* The browser can interpret `.html` files and render content with style. It can also execute JavaScript!

* The first HTML file you should create for a new website should always be `index.html`
  * `index.html` is a magic name that servers will automatically look for if a user enters a domain without a file extension: `test.com` is the same as `test.com/index.html`. 
* `index.html` is commonly known as the **entry point**

**Q: Browsers are specialized "viewer" applications for `.html` files. What are other examples of applications that are made to view specific kinds of files?**

<details><summary>Answer</summary>

There are tons of examples! But here are a few

* Photoshop is used to display image files like `.jpg`, `svg`, etc...
* Adobe and Preview are made to view `.pdf` files
* iTunes is made to play `.mp3` files.
* Microsoft Word is made to view and edit `.doc` files

</details>

## Live Server

* When you open an HTML file directly to view in your browser, your browser uses the `file://` **protocol** to retreive the `.html` file from your file system.

![using the file protocol to get the html file](img/index-file-protocol.png)

* Most of the time, your browser will be using the **`https://` protocol** to get the `.html` file from a **server**.
* A **server** is just another computer, somewhere else, that provides a resource to another computer (over the internet in this case)
* **HTTPS** (Hypertext Transfer Protocol Secure) is how your browser communicates with a server.

![using the https protocol to get the html file](img/github-https-protocol.png)

* While we build our websites, we will use a VS Code extension called **Live Server** that _locally_ simulates this server experience (only we can access this server).
* When we want to publish our website on the internet, we will use Github pages to **host** and **serve** our content (anyone can access this server).

**Take a moment and install the VS Code extension called Live Server**

## What is HTML?

* **HTML** (**H**yper**t**ext **M**arkup **L**anguage) is the language used to build webpages.
* It describes **content** of the page (what to display) and the **structure** of the page (where/how to display it)

```html
<h1>My awesome website</h1>
<p>My hobbies are...</p>
<ul>
  <li>coding</li>
  <li>soccer</li>
  <li>cooking</li>
</ul>
```

* `h1`, `p`, `ul` and `li` are called **HTML tags**
* HTML tags determines _how_ the content inside them is displayed.

**Q: How do you think these different tags affect what is displayed?**

<details><summary>Answer</summary>

* The `h1` says to make a header. 
* The `p` says to make a normal paragraph. 
* The `ul` says to make an unordered list with three list items (`li`) in it.

</details>

## HTML Elements

* **HTML elements** are created using an **opening tag** and a **closing tag**.

```html
<!-- This is a comment -->
<h1>content to be shown</h1>
<p>
  This works too
</p>
<!-- Notice the / in the closing tag -->
```

* The content between the tags is displayed to the user.
* **Headers** are created using `h1`, `h2`, `h3`, `h4`, `h5`, or `h6`. There should only be one `h1` per page and they should flow in descending order.
* **Paragraphs** are created using `p` and are for most normal text.

**Q: What is wrong with the HTML below?**

```html
<h1>
Hello World!
</h3>
```

<details><summary>Answer</summary>

The closing tag does not match the opening tag! The closing tag should be `</h1>`.

Also, stylistically, we should indent the content of the element if we are putting each part of the tag on separate lines.

</details>

## Nesting Elements

* Text is not the only thing that can go in a tag, in fact *most* tags **nest** other tags.

```html
<div>
  <p>This is nested inside the division</p>
  <p>We can put as much stuff in here as we want!<p>
  <div>
    <p>And nest quite deeply!</p>
  </div>
</div>
```
* Nested elements should always be indented one level for readability.
* Good examples of this are the **ordered list** and **unordered list** tags and their **list items**:

```html
<h2>Make dinner</h2>
<ol>
  <li>Get freezer meal</li>
  <li>Put in microwave</li>
  <li>Eat</li>
</ol>

<h2>Pets</h2>
<ul>
  <li>Dogs</li>
  <li>Cats</li>
  <li>Fish</li>
</ul>
```

* **Child tags** are those that are nested in a **parent tag**. 
* Tags that are in the same nesting level next to each other are **sibling tags**.

**Q: When should you use `<ol>` and when should you use `<ul>`?**

<details><summary>Answer</summary>

Use `<ol>` when order matters, and `ul` when it doesn't.

</details><br>

**Q: In the example above, which elements are parents, which elements are children, and which elements are siblings?**

<details><summary>Answer</summary>

* Both of the `h2` tags, the `ol` tag and the `ul` tag are sibling tags
* The `ol` and the `ul` are both parent tags to their `li` tags
* The `li` tags are all children tags of the `ol` or `ul` tags
* The `li` tags are sibling tags within their own lists.

</details>

## Self Closing Tags
* Some HTML elements have **self-closing tags** like image elements (`<img />`), line-break elements (`<br />`), and horizontal-rule elements (`<hr />`).
* These have no closing tag!

```html
<hr /> <!-- The `/>` isn ot strictly required, but  is recommended -->
<hr> <!-- technically okay -->
<br />
```

* Usually `br` is just a stop-gap for testing and rapid iteration
* In reality breaks on the page should be controlled by css. 
* `hr` tags can be styled to look like nice dividers


## Opening Tag Attributes & Images

* Sometimes, we need more information to render a tag. For example, images need a media source.

```html
<img 
  src="https://http.cat/images/415.jpg" 
  alt="cat eating a record" 
/>
```
* **Attributes** add additional information about an element and are listed in the opening tag.
* `src` is the actual media source
* `alt` tells bots and screen readers what the picture is. It's also what can show up if the link is broken.
  * If the content is central to your site, you *must* include an `alt` attribute
  * If the picture is just a decoration (like a background image) you do not need an `alt` attribute. 
  * In your `alt` do not say "picture of" or anything, just describe the image.

* `src` can be a hyperlink or a local link:

```html
<img src="https://http.cat/images/415.jpg" alt="cat eating a record" />

<img src="./images/lecture-prep/images/cat-pizza.png" alt="cat eating a pizza" />
```

* A cooler version of an image with a caption is `figure`, look it up!

```html
<figure>
  <img src="./images/lecture-prep/images/cat-pizza.png" alt="cat eating a pizza" >
  <figcaption>Here we see a cat eating a pizza it does not deserve.</figcaption>
</figure>
```

**Q: What is wrong with this HTML element?**

```html
<img>cat-pizza.png</img>
```

<details><summary>Answer</summary>

The source of the image should be in the opening `<img>` tag as a `src` attribute.

There should also be an `alt` attribute describing the picture.

</details>

## Ids and Classes

* `id`s mark a tag as a *single*, unique, important item on your page. 
* `class`es are for denoting a bunch of related tags, and can appear more than once per page. 
* Both `id`s and `class`es are used to reference elements on pages so that they can be accessed, either by JS or CSS. 
* They are a way to differentiate tags on your page from other identical tags.

```html
<h1 id="main-heading">Hello world!</h1>
<p class="blue-text">lorem ipsum</p>
<p>lorem ipsum</p>
<p class="blue-text">lorem ipsum</p>
<p>lorem ipsum</p>
```

* `id` and `class` names are case sensitive, cannot start with numbers, and can't have spaces. 
* Stylistically, in pure html, you'll see `kebab-case` names. 
* You can have multiple classes by separating with spaces, but only one id. 
* You can include both an id and class on a single tag.

```html
<p id="important-text" class="blue funky-font">
  some text
</p>
```

* `id` = one name per page, one per tag
* `class` = multiple per page, multiple space separated names per tag

**Q: How would you create a `<p>` element with the id `"caption-1"` and the classes `"italic"` and `"centered"`?**

<details><summary>Answer</summary>

<p id="caption-1" class="italic centered">
  some text
</p>

</details>

## Links

* Pages often link to others with **hyperlink anchor** tags `<a>`.
* They have an `href` attribute for where to go
* The tag contents are displayed as the link

```html
<a href="https://google.com">Go to Google</a>
```

* Links can take you to online sites, local or absolute pages of our own, or even reference elements within the page (they link to ids)

```html
<a href="https://google.com">Go to Google</a>
<a href="./">Go Home</a>
<a href="./about">Our About Page</a>
<a href="#more-information">See more information</a>
```
* Be careful with relative links: `"/"` is the root of the *server* which may not be where you mean. 
* Local links `./`, `../` will direct you from your current directory.

* Links can also be nested, but will still flow seamlessly in the final document.


```html
<p> If you're looking for things <a href="https://google.com">Go to Google</a>, and you'll see ads</p>
```

* Link text should *always* be descriptive of where you're going, never just put "click here."

**Q: What page does this anchor tag take us to?**

```html
<a href="./">Go Home</a>
```

<details><summary>Answer</summary>

The `index.html` page! 

</details>

## Properly formatted document

* The way that HTML works is it's a "document" filled with "tags". 
* Let's start simple with some boilerplate to set up our document

```html
<!DOCTYPE html>
<html lang="en">
  <!-- Everything else goes here -->
</html>
```

* These two tags make sure our browser knows what we're dealing with. 
* Just copy them in without worrying. 
* There are other doctypes and languages, but this is what we'll use

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
```

* The `head` tag is where we put meta information, scripts, links, and titles. 
* The `title` tag is the only one visible to our users as what appears in the browser tag. 
* `meta` does other things like tell the mobile browser how big to start the page and what character set we're using.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

* The `body` tag is where we can put things for our users to see. 
* From here on out, always include the **boilerplate** above
* VS Code users: start with an empty document, type `html` and then from the popup, select `html:5` and hit <kbd>Enter</kbd>

**Create a new HTML file and type in `html:5`**

## Semantic vs Non Semantic Elements
* So far, all the tags we've made were **semantic** — their name told us about their function: `h` tags are headings, `a` are links, `p` are paragraphs. 
* However, there's another kind of tag that conveys no meaning: **non-semantic**. 
* Pretty much the only non-semantic tags you'll see are `div` and `span`. These are just for grouping other related tags together (div) or calling out a particular section of text (span).

```html
<div id="main-user-info">
  <p><span class="name-text">Name:</span> Zo</p>
  <p>Age: 24</p>
  <p>Hobbies:
  <ul>
    <li>Basketball</li>
    <li>Coding</li>
  </ul>
</div>
```

* Non-semantic tags should only be used for grouping or grabbing parts of text.

```html
<div>
  <div>Hobbies</div>
  <div class="hobby">Basketball</div>
  <div class="hobby">coding</div>
</div>
<!-- NO AWFUL. NEVER. -->
```

**Q: Which semantic tags should we use in the code snippet above?**

<details><summary>Answer</summary>

The outermost `div` is okay but the text `Hobbies` should be inside a `p` or a header and the hobbies themselves should be `li` elements inside of a `ul` or an `ol`.

```html
<div>
  <h3>Hobbies</h3>
  <ul>
    <li class="hobby">Basketball</li>
    <li class="hobby">coding</li>
  </ul>
</div>
```

</details>