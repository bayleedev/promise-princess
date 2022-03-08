const { performance } = require('perf_hooks');
const {
  Doggo,
  DoggoError,
} = require('./constants');

// Exercise 4
// 🐶 Princess and her neighbor 🐩 Diego both both microchips
// These are often placed under a puppies skin when they are young, and if they
// are ever lost can be scanned by whoever finds them. The unique id on the
// microchip allows them to be traced back to their family.
//
// Princess's microchip always scans in 100 ms
// Diego's microchip always scans in 300 ms
//
// The microchip scans are IO bound, the CPU is free while this is happening
//
// Decoding either chip takes exactly 200 seconds, but they are CPU bound,
// meaning they will stop the thread, and no other code will run.
//
// If we do these one after the other, synchronously, it'll take 800 ms.
//
// Could you find a way to make this 700 ms? 500 ms? Both are possible.
//
// The solution is to scan a microchip `then` decode it. This will give you a
// promise back, do this once per doggo, and `Promise.all` both returns This
// will cause both scans to start happening, and as each one resolves it
// decodes. Once both decodes happen, the Promise.all() will resolve.
//
// Emoji Key:
// 🐽 - Princess found a hint! maybe a line to change.

module.exports = async (assert) => {
  const princess = new Doggo('princess');
  const diego = new Doggo('diego');

  // 🐽 When you use `await` you are waiting for a Promise to resolve, and
  // blocking the thread from doing anymore operations. Because it's a Promise,
  // you can swap:
  //
  // `await fn()`
  //
  // with
  //
  // `fn().then(..)`

  const princessBarcode = await princess.scan(); // 🐽 change `await` to `then`
  const princessCode = await princessBarcode.decode(); // 🐽 place in `then`

  const diegoBarcode = await diego.scan(); // 🐽
  const diegoCode = await diegoBarcode.decode(); // 🐽

  assert(princessCode === 'princess.wiggles', '🐶 You found Princess!')
  assert(diegoCode === 'diego_rulz_lawl', '🐩 You found Diego!')
  assert(princess.isHappy(), '👑 Princess must remain happy!');
}
