# Intro To Regex Cheat Sheet!

## The Basics

A regular expression is written as a collection of characters/symbols surrounded by a pair of forward slashes:

```js
const catRegex = /cat/               // matches the characters "cat"
catRegex.test("the cat in the hat"); // true
catRegex.test("the dog in the hat"); // false because no "cat"
catRegex.test("the Cat in the hat"); // false because of case sensitivity
```

Flags go after the second forward slash and alter the behavior of the regular expression

```js
const allCats = /cat/gi // match all "cat"s regardless of case, not just the first one
"my cat is named Catherine".match(allCats); // ['cat', 'Cat']
```

You will typically use the `RegExp.test(str)`, `str.match(regex)`, or `str.replace(regex, str)` methods when utilizing regular expressions

```js
// Match all sets of 1 or more alphanumeric characters
const regex = /\w+/gi
const str = 'hello world, my name is ben!'

regex.test(str); // true
str.match(regex); // [ 'hello', 'world', 'my', 'name', 'is', 'ben' ]
str.replace(regex, 'hi') // 'hi hi, hi hi hi hi!'
```

### There are a lot of cool ways to use regular expressions

Here are some snippets to get started! 

| **Name**                   | **Info**                              | **Example**        |
|----------------------------|---------------------------------------|--------------------|
| Flags                      | g=global, I=insensitive               | /cat/gi            |
| letters                    | You know letters                      | /dog/              |
| digits                     | You know digits                       | /12/               |
| Character Set/Class        | Brackets                              | /[aeiou]/          |
| Negated Character Set      | Carrot and brackets                   | /[^aeiou]/         |
| O or more                  | *                                     | /a*/               |
| 1 or more                  | +                                     | /a+/               |
| 0 or 1                     | ?                                     | /a?/               |
| Start of string            | Carrot, no brackets                   | /^hi/              |
| End of string              | Dollar sign                           | /bye$/             |
| Quantifier exactly         | Braces, one number                    | /AH{10}/           |
| Quantifier at least X many | Braces, one number and comma          | /OH{3,}/           |
| Quantifier exact range     | Braces, two comma separated numbers   | /WO{2,4}W/         |
| Groups                     | Parens with optional pipe OR operator | /(my)\s(cat\|dog)/ |


## Special Characters 

| Character Class | Definition                    |
|-----------------|-------------------------------|
| [0-9]           | Any single digit              |
| [3-30]          | And number in range           |
| [a-z]           | Any lowercase letter          |
| [a-d]           | Any lowercase letter in range |
| [A-Z]           | Any uppercase letter          |
| [E-Q]           | Any uppercase letter          |
| [a-zA-Z]        | Any letter                    |
| \d              | Any single digit              |
| \D              | Any NON digit                 |
| \w              | Any alphanumeric (and _)      |
| \W              | Any NON alphanumeric          |
| \s              | Any whitespace character      |
| \S              | Any NON whitespace character  |
| \b              | Any word break                |
| \B              | Any NON word break            |
| .               | Any character at all          |
| \\.              | An escaped period             |