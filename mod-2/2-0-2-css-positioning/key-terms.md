# CSS Display + Positioning

**Table of Contents**
* [Box Model](#box-model)
* [Display](#display)
* [Content Box](#content-box)
* [Position](#position)

## Box Model

![The box model showing the margin, border, padding, and content. The width and height affect the content box by default](lecture-code/images/margin-padding-content.png)

- **width** and **height** affect the **content box**
- **Margin** is the space between elements
- **border** forms a line around an element
- **padding** forms the space between the border and the actual content of an element
- **units** can be px, rem, em, % (and more but those are enough for now)

Challenges:
- Make the square twice as wide as the rectangle but stay square
- Make the rectangle's border blue and 2rem wide
- Add space between the square and the rectangle. 
- Can you only add space below the square without pushing it away from the side of the screen?

-----------------------------------------
# display
* Notice how the `div` and `p` tags each get a new line, but the `a` and `img` tags are in the same line? 
* That's because their `display` is different:

| Display Type            | New Line? | Accepts Height / Width?                    | When To Use                                                       | Default Elements      |
|-------------------------|-----------|--------------------------------------------|-------------------------------------------------------------------|---------------|
| `display: block;`       | Yes!      | Yes!                                       | When you want things on a new line.                               | Most things!  |
| `display: inline`       | No        | No (but accepts horizontal padding/margin) | For inserting an element within an existing line of text content. | span, b, i, a |
| `display: inline-block` | No        | Yes!                   | Buttons in a navigation bar!                                      |         None      |


See what happens when you assign each type of `display` to `div` an `a` and an `img` tag! 

## Content Box 

The `box-sizing` property determines what the `width` and `height` will change.
* `content-box` (default) will apply the `width` and `height` to the content box itself. The total width/height is the sum of the content, padding, and border boxes.
* `border-box` will apply the `width` and `height` to the border box. The content box will reduce in size such that the content box + padding box + border box equal the `width`/`height`.

```css
* {
  box-sizing: border-box;
}
```

* The **reset** above is used to give ALL elements a `box-sizing: border-box` which can greatly simplify sizing across the entire webpage.

## Position
We can also directly control positioning of our elements on the page through "position." This is a very powerful, **but very finicky tool**.

Use this [interactive documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position) to play around with it.

- `position: static`
  - Elements render in normal document flow and no offset values can move statically positioned elements
- `position: relative`
  - Elements are positioned relative to their normal position
  - Offset properties like `top`, `right`, `bottom`, `left`, etc. can move elements from their original spot
  - Other content flows around the *original* position

- `position: absolute`
  - Elements removed from normal document flow, and other elements will be able to fill that space
  - Positioned relative to nearest positioned ancestor.
    - This is important, as if the parent isn't `absolute` or `relative` then the child will be positioned relative to the entire body
    - I've included a parent div for the two rectangles exactly for this reason, so experiment with adding/removing `relative` to i

- `position: fixed`
  - Behaves like absolute positioning, except its positioned to the viewport

- `position: sticky`
  - this will behave like `relative` until you scroll past it, then it will stick on the top bottom or sides
  - Finicky, be careful about parents blocking it