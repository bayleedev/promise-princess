class PrincessError extends Error {}
class AlreadyAwake extends PrincessError {}
class AlreadyAsleep extends PrincessError {}

class Princess {
  constructor () {
    this.asleep = true;
  }

  isAwake () {
    return ! this.isAsleep();
  }

  isAsleep () {
    return this.asleep;
  }

  sleep () {
    if (this.asleep) {
      throw new AlreadyAsleep('Princess is already asleep');
    } else {
      this.asleep = true;
    }
  }

  wake () {
    if (!this.asleep) {
      throw new AlreadyAwake('Princess is already awake');
    } else {
      this.asleep = false;
    }
  }
}

module.exports = {
  Princess,
  PrincessError,
  AlreadyAwake,
  AlreadyAsleep,
}
