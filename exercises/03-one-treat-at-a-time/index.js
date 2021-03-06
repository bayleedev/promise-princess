const { Princess } = require('./constants');

// Exercise 3
// ๐ถ Princess wants some some snacks.
// I 'promised' her I'd give her two treats, but she needs them to given to her
// one at a time.
//
// Did you notice, in a `then` or `catch` you don't have `resolve` or `reject`?
//
// You can return a `new Promise(...)` and that'll become the item the rest of
// the `then` and `catch` chain onto.
//
// ๐ธ API Reference ๐ธ
// ๐งต Hint: `princess.giveTreat()` returns a `Promise`.
// ๐งต Hint: `princess.isHappy()` is synchronous.
//
// Emoji Key:
// โญ - Try and get your code here
// ๐ฝ - Princess found a hint! maybe a line to change.

module.exports = async (assert) => {
  const princess = new Princess();
  princess.giveTreat('๐');
  return princess.giveTreat('๐').then(() => {
    assert(princess.isHappy(), '๐ Princess demanded two treats, one at a time.');
  });
}
