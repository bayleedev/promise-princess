const ExerciseSet = require('./src/exerciseset');

const exerciseSet = new ExerciseSet([
  {file: '01-anatomy', assertCount: 1},
  {file: '02-bedtime', assertCount: 1},
]);

exerciseSet.runner();
