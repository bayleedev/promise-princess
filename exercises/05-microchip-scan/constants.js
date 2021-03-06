const { performance } = require('perf_hooks');
const NOSE_TRAIN = 'π½πΆπ½ π½πΆπ½ π½πΆπ½ π½πΆπ½ π½πΆπ½';
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

  // synchronous
  isHappy () {
    const total = performance.now() - this.start;
    if (total < 550) {
      return true;
    }
    console.log(NOSE_TRAIN);
    console.log('π½π½π½ Total Time:', Math.round(total), 'ms π½π½π½');
    console.log(NOSE_TRAIN);
    throw new AngryError([
      'π Princess is angry!',
      'This took way too long, how can we make it go faster?',
      'π½ Try removing an `await` and use the return value as Promises.',
    ].join(' '));
  }

  // asynchronous
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
