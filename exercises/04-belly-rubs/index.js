const { Princess } = require('./constants');

// Exercise 3
// 🐶 Princess wants some belly rubs.
// I 'promised' her I'd give her the perfect amount of belly rubs
// and as we all know, but she wants two belly rubs at the same time, one with
// each hand.
//
// Instead of calling it once, why not put two bellyRub() promises in an array
// and use `Promise.all([bellyRub1, bellyRub2]).then(...)`
//
// It might be worth taking a gander at the docs:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
//
// 🕸 API Reference 🕸
// 🧵 Hint: `princess.bellyRub()` returns a `Promise`.
//
// Emoji Key:
// ⭐ - Try and get your code here
// 🐽 - Princess found a hint! maybe a line to change.

module.exports = (assert) => {
  const princess = new Princess();
  return princess.bellyRub()
    .then((res) => { // what does Promise.all pass to the next then?
      const isSingleAlligator = res === '🐊'
      assert(!isSingleAlligator, 'We do not expect only a single 🐊 alligator back. Try `Promsie.all`');

      const hasTwoItems = res.length === 2;
      assert(hasTwoItems, '⭐ The goal is to get here')
    });
}
