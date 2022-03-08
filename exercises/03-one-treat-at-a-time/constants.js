class PrincessError extends Error {}
class TreatError extends PrincessError {}

class Princess {
  constructor () {
    this.count = 0;
    this.total = 0;
  }

  giveTreat (alligator) {
    if (alligator !== '🐊') {
      throw new TreatError('👑 Princess demands all treats be alligators. Try passing in an alligator (🐊) to the `giveTreat()` method.')
    }
    this.total++;
    this.count++;
    return Promise.resolve().then(() => {
      if (this.count == 2) {
        throw new TreatError([
          '👑 Princess demands a single treat at a time!',
          'You tried to give her a second treat before she',
          'finished her first 🐊 treat. Try chaining `giveTreat()`',
          'after the first one resolves.',
        ].join(' '));
      }
      this.count--;
    });
  }

  isHappy () {
    if (this.total === 2) {
      return true;
    }
    throw new TreatError('👑 Princess wanted two treats at a time! Try calling `giveTreat()` twice.');
  }
}

module.exports = {
  Princess,
  PrincessError,
  TreatError,
}
