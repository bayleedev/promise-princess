const { Princess } = require('./constants');

// Exercise 4
// ๐ถ Princess wants some belly rubs.
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
// ๐ธ API Reference ๐ธ
// ๐งต Hint: `princess.bellyRub()` returns a `Promise`.
//
// Emoji Key:
// โญ - Try and get your code here
// ๐ฝ - Princess found a hint! maybe a line to change.

module.exports = (assert) => {
  const princess = new Princess();
  return princess.bellyRub()
    .then((res) => { // what does Promise.all pass to the next then?
      const isSingleAlligator = res === '๐'
      assert(!isSingleAlligator, 'We do not expect only a single ๐ alligator back. Try `Promsie.all`');

      const hasTwoItems = res.length === 2;
      assert(hasTwoItems, 'โญ The goal is to get here')
    });
}
