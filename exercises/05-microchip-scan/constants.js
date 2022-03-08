const { performance } = require('perf_hooks');
const NOSE_TRAIN = '🐽🐶🐽 🐽🐶🐽 🐽🐶🐽 🐽🐶🐽 🐽🐶🐽';
class DoggoError extends Error {}
class AnnoyedError extends Error {}
class AngryError extends Error {}

// slow and CPU bound
const slow = () => {
  Math.atan(Math.random())
  Math.tan(Math.random());
};

class Doggo {
  constructor (name) {
    this.name = name;
    this.start = performance.now();
  }

  // Princess is happy when it takes less than 550 ms
  // Princess is annoyed when it takes less than 790 ms
  // Princess is angry when it takes more than 790 ms
  isHappy () {
    const total = performance.now() - this.start;
    if (total < 550) {
      return true;
    }
    console.log(NOSE_TRAIN);
    console.log('🐽🐽🐽 Total Time:', Math.round(total), 'ms 🐽🐽🐽');
    console.log(NOSE_TRAIN);
    throw new AngryError([
      '👑 Princess is angry!',
      'This took way too long, how can we make it go faster?',
      '🐽 Try removing an `await` and use the return value as Promises.',
    ].join(' '));
  }

  scan () {
    const isPrincess = this.name === 'princess';
    return new Promise((resolveScan) => {
      setTimeout(() => {
        resolveScan({
          decode: () => {
            return new Promise((resolveDecode) => {
              const end = performance.now() + 201; // 201 ms
              while (end > performance.now()) {
                Math.tan(Math.random());
              }
              resolveDecode(isPrincess ? (
                'princess.wiggles'
              ): (
                'diego_rulz_lawl'
              ))
            });
          },
        });
      }, isPrincess ? 101 : 301);
    });
  }
}

module.exports = {
  Doggo,
  DoggoError,
}
