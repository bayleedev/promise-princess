const { EMOJI_TRAIN, TestFailed } = require('./constants');
const Exercise = require('./exercise');

class ExerciseSet {
  constructor (files) {
    this.files = files;
  }

  onSuccess () {
    console.log('\n', EMOJI_TRAIN, '\n');
    console.log('🌭 hot dog! You finished the workshop, good job!');
    console.log('\n', EMOJI_TRAIN, '\n');
  }

  onError (errorObject) {
    if (!(errorObject instanceof TestFailed)) {
      console.log('🤖 You must be lost. -BMO');
      console.log(errorObject);
    }
  }

  compile () {
    return this.files.reduce((promiseChain, { file, assertCount }) => {
      return promiseChain.then(() => {
        const exercise = new Exercise(file, assertCount)
        return exercise.run();
      });
    }, Promise.resolve());
  }

  runner () {
    return this.compile()
      .then(this.onSuccess)
      .catch(this.onError);
  }
}

module.exports = ExerciseSet
