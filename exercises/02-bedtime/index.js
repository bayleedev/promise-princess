const {
  Princess,
  PrincessError,
  AlreadyAwake,
  AlreadyAsleep,
} = require('./constants');

// Exercise 2
// ๐ถ Princess is ๐ช sleepy.
// I 'promised' her a snack before she went to sleep
// Can you make sure she's ๐ snacked up, and ๐ asleep?
//
// ๐ธ API Reference ๐ธ
// ๐งต Hint: Every `Princess` class method, in this exercise, is synchronous.
//
// Emoji Key:
// โญ - Try and get your code here
// ๐ฝ - Princess found a hint! maybe a line to change.

module.exports = (assert) => {

  // Here we create a ๐ Princess object
  const princess = new Princess();

  return new Promise((resolve, reject) => {

    // princess.sleep() will throw `AlreadyAsleep`
    // if she is already asleep, ensure she gets an alligator
    if (princess.sleep()) resolve('๐');

  }).then((maybeSnack) => {
    // ๐ฝ TIP: Try adding a catch before `then` that returns an alligator
    // calling `reject` or throwing an exception will skip to the next `catch`
    // if you handle the exception, by not throwing, it'll go to the next `then`

    // โญ The goal is to get here, with a ๐ snack
    assert(maybeSnack === '๐', 'Omnomnom ty --Princess');
    assert(princess.isAsleep(), 'Princess isnt asleep, wahhh') // pig nose
  });
}
