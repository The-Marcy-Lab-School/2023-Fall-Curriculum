# Lecture: Intro to RegEx
[slides](https://docs.google.com/presentation/d/1KNxfevZGXU2srFOejf6qBgOwXznH8ddQ3ePeqTXbGiQ/edit?pli=1#slide=id.g241f7cfd64c_0_9)

## Context
The fellows will have heard a lot about RegEx and how scary it is. Indeed, Marcy fellows joke around about RegEx, but unfortunately they kind of *are* scared of it. We need to open RegEx back up as a cool tool and not alien gibberish. This lesson is not about throwing the kitchen sink at them. It's just about exposing them to the ideas, and showing that it's a powerful tool is simpler than it looks.

Also, the entire first half (2/3 almost) is only about RegEx itself, not even involving JS yet. We just want them to see the concepts at play before worrying about them getting into their editor. Also, I know there are a lot of online RegEx editors, but we're going to use scriptular.com. It is super paired down and limits you to some strings to test and the regex itself. It will be easy to see on screen and doesn't have any bells and whistles to distract the students. Obviously, students can play around with better editors on their own, but let's keep our focus tight during lectures. We'll need one tab for our main "Hello there!" example, and another tab open for various experiments.

# Part 1 - HOOK: The crazy power of RegEx
To demonstrate that power take a minute to show them the first slide. Go through the code, and all it's doing, or have the fellows explain what it does. Either way, only take a minute or two. The point is that it's doing a fair amount of work. Then smash cut to the next slide where all those lines are done in like 10 characters. Talk about how it may look weird now, but by the end of the lecture, they'll know exactly how it works and how it's really not that hard to do with RegEx.

Slides: 1-4
time: 5 min
total: 5 min

# Part 2 - Speedrunning the basics
After you give a *brief* overview on slide 5 about what RegEx is, you come to the "speedrun" section. The idea here is not to slowly slog through each and every type that RegEx can filter by, but instead show them the simpler stuff quickly so that they can experiment on their own. None of RegEx is intuitive, so showing the whole picture roughly will help them draw it on their own slowly. The scripting on this section is pretty tight, but it all flows. Start in scriptular.com with the test string "Hello there!" already in. The slides go in this order, however if possible memorize the flow, do it live in scriptular, and then scan through the slides as a mini review.

## Letters
Show that the first tool to use are letters themselves! Use "Hello there" and note how it matches on just the words, skipping the "!"

## Flags: case insensitive
Lowercase the "Hello" and point out that the match disappears because if you use letters, the match must be exact. Say that we can get more leeway by using `flags` to modify the behavior of our regex. The `i` flag makes our entire RegEx not care about cases, so once you add it, point out we get a match again

## Flags: global
Drop all the letters except for "e" and point out that by default, RegEx only matches on the first instance, so only the first "e" is highlighted. If we want to hit *every* instance, we need the `g` "global" flag. Replace the `i` flag and see how we suddenly match all 'e's.

## Flags: combine
Point out that you actually didn't need to delete the other, you can combine flags. Add the `g` back in, and then replace 'e' with 'h'. Now that you have `gi` flags, both the upper and lowercase match!

## Character sets
Let's say that we don't just want `h` though, we actually want *any* vowel. If I specify letters "aeiou" that would pick up individual letters, because remember, letter sequences must match. So all the vowels will be missed. No, what we want is only one at a time, choosing from a small set. Enter Character Classes (or sets, I call them sets). These brackets let us pick up individual letters like we want. Toggle the global flag to remind them that without it, this doesn't work.

## Negated Sets
Sometimes you want anything *but* the specified characters. In that case you add a little carrot, so now I'm getting anything that *isn't* a vowel. Everything but `a,e, i, o, or u` will now match.

## Quantifiers
That's a broad stroke though, so let's narrow down the *number* of things we want. We have 1 or more, 0 or more, or 0 or 1 of something. Use the `+` to show that now sequences of characters are matched.

## Exact Quantifiers
That's cool, lets build on this and try to match only double consonants, meaning we only want 2 exactly. Just show them the `{ }` quantifier at a set number, you can mention the range options, but don't dwell, it's on the cheat sheet.

Finally point out the problem though: instead of getting "th" it's getting the space and "t". Before moving onto the solution, take a pause and review the slides of everything you did.

Slides: 6-14
time: 10min
total: 15min

# Part 3: Special Character Classes
Explain the problem is that the space *is* a non vowel, so it matches and eats up the first character in our {2} quantifier. We could easily add a " " space to our negated set, but there's a better way. A special character class `\s` which gets *any* whitespace. Use that as a segue to show *all* the special characters. Basically show the "-" range pattern, how capitalizing flips the matcher to anything *but* what is specified, and the `.` wildcard. Take some questions about these, show some off (in a new tab preferably) but don't take too long here. They're *just* about to go off on their own for 10 minutes.

After a few questions, use the `\s` to complete our pattern that gets all double consonants and you're set!

Slides: 15-16
time: 5min
total: 20min

# Part 4: Groups and Anchors
Just take a few minutes to get the groups and anchors explained. Do not talk about *capture* groups now, only talk about groups as a way to specify a group of multiple characters. They'll definitely confuse groups and sets so give that a minute to breath. Also do not use pipe operators outside of groups, it's confusing and 9 times out of 10 not what the fellows meant to do.

Slides: 17-19
time: 5min
total: 25min

# Part 5: Free Learning
Now that the students have seen a *lot* in the last 20 minutes, give them 10 minutes on their own to explore and experiment with scriptular (not js). They can do this in pairs, groups, or solo, whatever you're feeling. Then take 5 minutes to come back as a group. I recommend you come up with a few little challenges for the fellows to try as well. Make sure to slack out the [cheat sheet](https://github.com/The-Marcy-Lab-School/1-2-2-cheat-sheet_regex) before, and leave the slide up on the cheat sheet one.

Slides: 20-21
time: 10min + 5min
total: 40min

# Part 6: JS RegEx
Show them the 2 ways to build regular expressions in js with the constructor and literal syntax. They'll almost always use literal unless they need something to be dynamic. Then demonstrate how the `.test` method returns a boolean, and run through a few fun little examples.

Slides: 22-24
time: 5 min
total: 45min

# Part 7: Solving the Original Function Together
The goal is to build the function from the opening `isOnlyAlphanumeric` but now do it with RegEx as a class. Experiment with scriptular first, model that this is a faster way to test RegEx patterns. Let the class lead on this one. You should have plenty of time. If you get through the example, feel free to do another example with `.test` or experiment with `.match` or `.replace`.

Slides: 25-27
time: 10 min
total: 55min
