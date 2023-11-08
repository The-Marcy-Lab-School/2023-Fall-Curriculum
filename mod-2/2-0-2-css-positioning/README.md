# Lecture Prep 2.0.1 - Intro To CSS

Unlike other lectures, please give out the full lecture code before hand so the fellows can play around with you during the lecture. There are only 4 big ideas here, so after each part there is *plenty* of time for experimentation and discovery!

# Part 0 - Width, Height, Margin, padding, and border
Again refer to the image showing the three (or your own image if you find one you like more!)

- width and height affect what you think
- Margin is the space between elements
- border forms a line around an element (show the basic border property again)
- padding forms the space between the border and the actual content of an element
- units can be px, rem, em, % (and more but those are enough for now)

Show how these properties interchange with each other.

Come up with some challenges for the fellows to play around with the units and properties and maybe give them challenges?
- make the square twice as wide as the rectangle but stay square
- make the square's border blue and 2rem wide
- .etc...


Time: 10min <br/>
Total: 10min

-----------------------------------------
# Part 1: display
Notice how the `div` and `p` tags stand alone on a new line, but the `a` and `img` tags dont? That's because their display is different:

- display: block
  - Elements render on a new line
  - Elements can have height and width
- display: inline
  - Elements do not render on a new line
  - Elements do not accept height or width
- display: inline-block
  - Elements do not render on a new line
  - Elements can have height and width (but it gets weird)

Demonstrate all the changes and permutations by affecting the displays of the `div`, `a`, and `img` tags. Now `img` tags are inline, but then why do they have height and widths? They are "replaced" elements which is sort of a "have your cake and eat it too" moment. Don't worry too much on it.

(also that annoying space between images is because inline elements respect white space, and in the html document there is a newline between images, hence, a single white space. Remove it with `block` or removing the white space in the HTML. You don't often see this because with JS added images, there's no white space between elements).

Time: 10min <br />
Total: 20min


# Part 2 content-box vs border-box
Explain how width is overridden by default (content-box), but when you turn on border box, then instead the content is what gets squished to ensure
that the width is maintained.

Demonstrate this by showing the rectangle and square have the same `width` but be different sizes. Toggle the property on the divs directly.

Then when finished, show the default way of doing

```css
* {
  content-box: border-box;
}
```

Which resets all elements (don't worry about pseudo selectors just yet).

Time: 10min <br/>
Total: 30min

# Part 3: position
We can also directly control positioning of our elements on the page through "position." This is a very powerful, but very finicky tool
- Static Positioning (default)
  - Elements render in normal document flow and no offset values can move statically positioned elements
- Relative Positioning
  - Elements are positioned relative to their normal position
  - Offset properties like `top`, `right`, `bottom`, `left`, etc. can move elements from their original spot
  - Other content flows around the *original* position

- Absolute Positioning
  - Elements removed from normal document flow, and other elements will be able to fill that space
  - Positioned relative to nearest positioned ancestor.
    - This is important, as if the parent isn't `absolute` or `relative` then the child will be positioned relative to the entire body
    - I've included a parent div for the two rectangles exactly for this reason, so experiment with adding/removing `relative` to i

- Fixed Positioning
  Behaves like absolute positioning, except its positioned to the viewport

- Sticky Positioning
  - this will behave like `relative` until you scroll past it, then it will stick on the top bottom or sides
  - Finicky, be careful about parents blocking it

I included a sticky div at the tail for you to easily demonstrate this effect.