class PrincessError extends Error {}
class BellyRubError extends PrincessError {}

class Princess {
  constructor () {
    this.count = 0;
  }

  // asynchronous
  bellyRub () {
    this.count++;
    return Promise.resolve().then(() => {
      if (this.count == 2) {
        return '🐊';
      }
      throw new BellyRubError('👑 Princess demands two hands! Try calling `bellyRub()` twice.');
    });
  }
}

module.exports = {
  Princess,
  PrincessError,
  BellyRubError,
}
