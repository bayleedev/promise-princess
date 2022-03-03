const EMOJI_TRAIN = '👑🐶👑  👑🐶👑  👑🐶👑  👑🐶👑  👑🐶👑';

function assert (bool, description) {
  if (!bool) {
    throw Error(description);
  }
}

// filename: assertCount
const exerciseFiles = {
  './exercises/01-anatomy': 1,
};

const p = Object.keys(exerciseFiles).map(async (exerciseFile) => {
  const exercise = require(exerciseFile);
  const expectedAssertCount = exerciseFiles[exerciseFile];
  try {
    let count = 0;
    await exercise((bool, description) => {
      count++;
      return assert(bool, description);
    });
    assert(count === expectedAssertCount, '🐕 You didnt have enough assertions in your code. Make sure you do the exercise correctly and reach out to Baylee with questions.');
    return Promise.resolve();
  } catch (e) {
    console.log('\n', EMOJI_TRAIN, '\n');
    console.log('🐶 Ruh roh, it looks like', exerciseFile, 'did not pass.');
    console.log('☔ Open ', exerciseFile + '/index.js to debug');
    console.log('\n', EMOJI_TRAIN, '\n\n');
    console.log(e);
    process.exit(0);
  }
});

Promise.all(p).then(() => {
  console.log('\n', EMOJI_TRAIN, '\n');
  console.log('🌭 hot dog! You finished the workshop, good job!');
  console.log('\n', EMOJI_TRAIN, '\n');
});
