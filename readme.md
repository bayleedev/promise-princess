## 👑 I promise, Princess 💚

Hello, and welcome to my Promise Workshop, with 🐶 Princess as my helper!

## Getting started 🥳

This is broken up into exercises. When you run the application, it'll go through
each exercises one by one, if one fails it stops and tells you about it.

Currently, every exercise is broken. Let's fix them, with our trusty sidekick,
Princess! She'll 🐽 sniff out hints, and ⭐ leave marks on hints she found.

### Exercises 🎮

Each exercise is inside a folder in `./exercises` with a simple setup.

```js
module.exports = (assert) => {
  return ...; // the `return` is important!
}
```

### The "module.exports" part 📸

This let's the exercise runner pull in your code easily, it's necesary and won't
work w/o it.

### The "return" 👀

Most exercises need to return a Promise so that the runner can execute them
correctly. If you don't return you might get an error saying that the "assert
count" was off.

### The "assert" method 🤪

This is a *very* basic assertion library. It mirrors how `console.assert` works,
but I made my own so I can do some special introspection for this workshop.

It takes 2 arguments:

1. The value to assert. Can be anything, but is often an operation, like triple
   equals.

2. A short description. This makes it easy to communicate the intent of the test
   when reading it. This message appears in the output of a failed result.

😍 A passing test!

`assert(1+1==2, '1+1 should be true!')`

😞 A failing test!

`assert(1+2==2, '1+1 should be true!')`

## Running 🐶

No need to keep your place, we'll do it for you. Just run the program and we'll
pick up where you left off.

No worries, our friend Princess will help 💜

```
npm start
```

## 🚧 What is in *that* file?

`.solution.js` - Most exercises have a solution file, you can take a look if you
ever get stuck on a problem.

`./runner.js` and `./src`

So, sure, you *could* just open this file, there's some neat things in there,
but you might run into some spoilers.

Open at your own learning risk!
