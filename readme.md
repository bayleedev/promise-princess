## 👑 I promise, Princess 💚

Hello, and welcome to my Promise Workshop, with 🐶 Princess as my helper!

## 🥳 Getting started

This is broken up into exercises. When you run the application, it'll go through
each exercises one by one, if one fails it stops and tells you about it.

Currently, every exercise is broken. Let's fix them, with our trusty sidekick,
Princess! She'll 🐽 sniff out hints, and ⭐ leave marks on hints she found.

Most of the exercises are around interacting with a `Princess` or `Doggo`
objects I created, isolated to the exercise.

## 🐊 Why alligators?

No, I do not feel Princess real 🐊 alligators, she's allergic.

You might not know this, but dogs often develop allergies to meats over their
lifetime. So while 🐥🐮 multi-source diets are healthier, single-source diets
allow you to respond to allergies faster. For that reason it's often recommended
to use single-source diets for dogs.

After Princess developed some allergies, and 🦌 import terrifs on less
allergy-invoking meats were recognized, I reached out to some less common meats.
Including, and you guessed it, 🐊 alligator. It's an understatement to say "she
loved it".

Today, she does not eat alligators, but her love for it was actualized. And she
became "the alligator hunter" in my view of her in my world. I often give her a
treat called "alligator whimzees" a meat-free dental chew shaped like an
🐊 alligator.

![alligator whimzee photo](./src/alligator.webp)

## 🎮 Exercises

Each exercise is inside a folder in `./exercises` with a simple setup.

`.solution.js` This will have a final solution, you could copy/🍝pasta. However,
it's recommended you only look if you're feeling stuck.

`constants.js` This will not need to be modified, but feel free to read the code
if you're unsure how certain methods work.

`index.js` Will always be present, and is the only place you'll need to make
changes.

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

⚠️ You do not need to modify any `assert` statements for any of these
exercises.⚠️

It takes 2 arguments:

1. The value to assert. Can be anything, but is often an operation, like triple
   equals.

2. A short description. This makes it easy to communicate the intent of the test
   when reading it. This message appears in the output of a failed result.

😍 A passing test!

`assert(1+1==2, '1+1 should be true!')`

😞 A failing test!

`assert(1+2==2, '1+1 should be true!')`

## 🐶 Running

Clone and change to that directory:

```
git clone git@github.com:bayleedev/promise-princess.git
cd promise-princess
```

There are no node package dependencies. But, ensure you are using `node 8.5` or
newer in order for the `perf_tools` to be part of the core library.

Lyceum requests node 14, so you likely are already using a new enough verison.

```
node --version
```

To run, simply:

```
npm start
```

No need to keep your place, we'll do it for you. Just run the program and we'll
pick up where you left off.

No worries, our friend Princess will help 💜

## 🚧 What is in *that* file?

`./runner.js` and `./src`

So, sure, you *could* just open these file, there's some neat things in there,
but you might run into some spoilers.

Open at your own learning risk!
