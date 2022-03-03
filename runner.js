const EMOJI_TRAIN = '👑🐶👑  👑🐶👑  👑🐶👑  👑🐶👑  👑🐶👑';

class TestFailed extends Error { }

function assert (bool, description) {
  if (!bool) {
    throw Error(description);
  }
}


function runExercise(exerciseFile, assertCount) {
  const exercise = require(exerciseFile);
  return new Promise((resolve, reject) => {
    let count = 0;
    const wrappedAssert = (bool, description) => {
      count++;
      return assert(bool, description);
    };
    exercise(wrappedAssert).then((res) => {
      assert(count === assertCount, '🐕 You didnt have enough assertions in your code. Make sure you do the exercise correctly and reach out to Baylee with questions.');
      resolve();
    }).catch((e) => {
      console.log('\n', EMOJI_TRAIN, '\n');
      console.log('🐶 Ruh roh, it looks like', exerciseFile, 'did not pass.');
      console.log('☔ Open ', exerciseFile + '/index.js to debug');
      console.log('\n', EMOJI_TRAIN, '\n\n');
      console.log(e);
      reject(new TestFailed(exerciseFile));
    });
  });
}

(() => {
  /**
  const fs = require('fs');
  fs.readdirSync('./exercises');
    -- where would I get assertCount?
  */
  const exerciseFiles = {
    // exerciseFile: assertCount
    './exercises/01-anatomy': 1,
    './exercises/02-bedtime': 1,
  };

  Object.keys(exerciseFiles).reduce((acc, exerciseFile) => {
    return acc.then(() => {
      const expectedAssertCount = exerciseFiles[exerciseFile];
      return runExercise(exerciseFile, expectedAssertCount);
    });
  }, Promise.resolve()).then(() => {
    console.log('\n', EMOJI_TRAIN, '\n');
    console.log('🌭 hot dog! You finished the workshop, good job!');
    console.log('\n', EMOJI_TRAIN, '\n');
  }).catch((e) => {
    if (!(e instanceof TestFailed)) {
      console.log('🤖 You must be lost. -BMO');
      console.log(e);
    }
  });
})()
