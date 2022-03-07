const { EMOJI_TRAIN, TestFailed } = require('./constants');
const path = require('path');

class Exercise {
  constructor(exerciseFile, assertCountGoal) {
    this.exerciseFile = exerciseFile;
    this.exercise = require(path.resolve('exercises', exerciseFile));
    this.ASSERT_COUNT_GOAL = assertCountGoal;
    this.assertCount = 0;
  }

  assertCount (bool, description) {
    this.assertCount++;
    return this.assert(bool, description);
  }

  assert (bool, description) {
    if (!bool) {
      throw Error(description);
    }
  }

  verifyAssertCount () {
    const hasMatchingCount = this.assertCount === this.ASSERT_COUNT_GOAL;
    this.assert(hasMatchingCount, [
      '🐕 You didnt have enough assertions in your code.',
      'Make sure you do the exercise correctly and reach',
      'out to Baylee with questions.'
    ].join(' '));
  }

  catchIt (errorObject) {
    console.log('\n', EMOJI_TRAIN, '\n');
    console.log('🐶 Ruh roh, it looks like', this.exerciseFile, 'did not pass.');
    console.log('☔ Open `./exercises/' + this.exerciseFile + '/index.js` to debug');
    console.log('\n', EMOJI_TRAIN, '\n\n');
    const regexp = new RegExp(this.exerciseFile);
    console.log(errorObject.stack.split('\n').filter((line, index) => {
      if (index === 0) return true;
      return regexp.test(line);
    }).join('\n'));
    throw new TestFailed(this.exerciseFile);
  }

  run () {
    return this.exercise(this.assert)
      .then(() => this.verifyAssertCount)
      .catch((error) => this.catchIt(error));
  }
}

module.exports = Exercise
