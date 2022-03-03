// 🐶 Princess dreams of being an alligator hunter
// I promised I'd give her an alligator, can you help?
//
// Emoji Key:
// ⭐ - Try and get your code here
// 🐽 - Princess found a hint! maybe a line to change.

module.exports = (assert) => {

  // 1: The anatomy of a promise
  //
  // Create a `new Promise` and pass in an
  // anonymous function with two arguments

  return new Promise((resolve, reject) => {

    // argument 1 is "resolve"
    // call this during a successful operation
    // with any useful data you wish to pass to `then`
    //
    // argument 2 is "reject"
    // call this during a failed operation
    // with any useful data you wish to pass to `catch`

    accept('🐊'); // 🐽
  }).then((resolvedData) => {

    // the first function in `then` is called when
    // the previous chain is `resolve`d
    // ⭐ Getting here is the goal

    assert(resolvedData === '🐊', 'BT Omnomnom ty --Princess');
  }).catch((rejectedData) => {

    // the first function in `catch` is called when
    // the previous chain is `reject`d or an error is thrown

    assert(false, 'BT 😩 How do we get to the `then` above?');
  });
}
