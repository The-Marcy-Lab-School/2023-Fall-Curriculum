# Lecture: Higher Order Array Methods
[slides](https://docs.google.com/presentation/d/14E-5lhZHbfxfuCIzrPnuYNrcH84_c7UKS-D8avZ8xCg/edit#slide=id.g2803e8838b5_0_0)

# Part 1 - HOOK: Why bother with declarative code?
To start, ask the fellows genuinely what are some differences between making a pizza from scratch vs ordering it online. This is a metaphor for `imperative` and `declarative` so try to steer the conversation towards "high effort, high control" vs "low effort, low control". After discussing for a minute, show (don't run) the example of how declarative code dramatically shortens the code. That's the buy in, these higher order methods can make our code way cleaner when doing repetitive tasks.

NOTE: remind fellows that "methods" are just functions that belong to an object, it's fine if they confuse "method" for "function" (all methods are functions, not all functions are methods)

Slides 1-8
time: 5 min
total: 5 min

# Part 2-6
Each part should run you 7.5-10 minutes. Start by hand holding a little with forEach since it's the first one (you should remind them the underlying logic is essentially a loop). All parts should feature some live coding and class interaction, but you can break them up on their own or with partners, whatever you want, mix and match. Just make sure they see the 5 big methods: .forEach, .map, .find(index), .filter, and .reduce. The goal of each section is that fellows should roughly know what the functions do and when they should use them.

Remember this is about exposure, not mastery, do not take longer than 10 minutes on any one section.

Slides 9-21
time: 8-10 min each
total: 55min

# Part 7: advanced
If you have time, show off some more advanced things. They'll have seen the other args for the callbacks, but remind them again that yes, you *do* have access to the value **and** the index with most of the callbacks. Also chaining can clean up their code. Show how reduce can be used to build an object quickly. And lastly mention that there are other methods out there they'll run into.

Try to close the lecture by showing these things off, but if the fellows don't get to it, that's fine, the hw will go over each aspect anyway.

Slides 22
time: 5 min
total: 60min