const ExerciseSet = require('./src/exerciseset');

const exerciseSet = new ExerciseSet([
  {file: '01-anatomy', assertCount: 1},
  {file: '02-bedtime', assertCount: 2},
  {file: '03-belly-rubs', assertCount: 1},
  {file: '04-microchip-scan', assertCount: 3},
]);

exerciseSet.runner();
