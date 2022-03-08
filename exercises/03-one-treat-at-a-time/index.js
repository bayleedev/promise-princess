const { Princess } = require('./constants');

// Exercise 3
// 🐶 Princess wants some some snacks.
// I 'promised' her I'd give her two treats, but she needs them to given to her
// one at a time.
//
// Did you notice, in a `then` or `catch` you don't have `resolve` or `reject`?
//
// You can return a `new Promise(...)` and that'll become the item the rest of
// the `then` and `catch` chain onto.
//
// 🕸 API Reference 🕸
// 🧵 Hint: `princess.giveTreat()` returns a `Promise`.
// 🧵 Hint: `princess.isHappy()` is synchronous.
//
// Emoji Key:
// ⭐ - Try and get your code here
// 🐽 - Princess found a hint! maybe a line to change.

module.exports = async (assert) => {
  const princess = new Princess();
  princess.giveTreat('🐊');
  return princess.giveTreat('🐊').then(() => {
    assert(princess.isHappy(), '👑 Princess demanded two treats, one at a time.');
  });
}
