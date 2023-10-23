# Lecture: Callbacks
[slides](https://docs.google.com/presentation/d/1ZoC1XUm9GJns3XqAYZGOIXt_LpUn9-VbQmdEZt_pf7M/edit?pli=1)

# Part 1 - HOOK: Why can you *not* call a function?

Show them the basic function that squares a number, call it with the parenthesis. Actually ask them what it returns.
Then go through the rest of the hook section without student asking questions, this is introducing the central idea.

Go to the next slide and wonder what it prints if we take out the parentheses. This is a mistake the fellows have made a bunch of times, but explain that the missing parentheses don't throw an error, but rather show the *function itself*. Rhetorically ask "why would JS allow us to *not* call a function?" then reveal that perhaps it's because *we* aren't the ones who are always meant to call functions directly. Sometimes functions can call *other* functions.

That opening allows the fellows to see that a weird "bug" of the language (accidentally forgetting to call a function) actually has a higher purpose and that they are about to learn about.


Slides 1-6
time: 5 min
total: 5 min

# Part 2: What's a callback and how does it help?
Have them write down the actual definition of a callback with the slide. Say "invoked" but don't go crazy on explaining the difference between 'calling' (when you call the function) and 'invoking' (when you pass a function, and then another function is the one who calls it). It's trivia at best.

The main focus of this section is taking the existing function without a callback, and converting it to one that does. Do this by examining the code. Point out that it's a little repetitive and that any new situation will require a new if check.

Then, live code the correction. That means breaking out the two checks into functions first, then passing them in, then invoking them. This is live coded so be as interactive as you can, but heavily guide them since this is new.

Once you have the code refactored, then you can show how easy it is to extend by writing a new inline function.

Slide 7-11
time: 10 min
Total: 15 min

# Part 3: Higher Order Functions and Review
Now that they've seen the power firsthand, we want to clarify. Explain that the "other" function that does the invoking has a name "higher order function". Go through the difference between the callback and the HOF with the diagram. Make sure the students know which function is which, which is passed in and which is called. Finish with a Check For Understanding asking how HOFs and callbacks improve our code. If you have time briefly explain what "first class citizen" means for functions in JS, otherwise safely skip.

NOTE: we explain that HOFs are good for situations where you don't know *what* or *when*. The when part comes into play next unit with events, tell them that but don't dwell on it now. We can't suddenly dive into the entire "async" field of JS right in the middle of this lecture.

Slide 12-17
time: 7.5min
Total: 22.5min

# Part 4: HOF and Callback interactive practice
To see how well the fellows got the concepts, as a class convert the two array functions provided into a single HOF and two callbacks. If you have time, add a third, new callback. The goal here is to have them see patterns, and we are subtly prepping them for tomorrow with the array HOF functions. This live coding section is less guided than the first, but still be sure you can finish in 12 minutes.


Slide 18-19
Time: 12.5min
Total: 35min

# Part 5: Intro to Sort
Explain that *most* of the time you will be writing callbacks for *existing* HOFs (because unless they're writing a library, you won't find yourself meeting the first requirement of a HOF, "You don't know what the callback should do"). And put that into practice with `.sort()`.

Show how default sort works and why it's a problem, then show both the full and shorthand way the `.sort()` callback works. Key here being that to sort the whole array you only need to look at 2 items at a time, and in order to determine their order, you only need any positive/negative number or zero. Warn them at the end that `.sort()` is mutational.

Slide 20-25
Time: 10min
Total: 45min

# Part 6: Sort practice
This is the tail of the lecture, if you get to it great, try to live code out some examples with sort with the provided started examples. If you could at least get to the *idea* of iterating over an object with properties, that would be great.

mutation
objects

Slides 26
Time: 10min
Total: 55min


