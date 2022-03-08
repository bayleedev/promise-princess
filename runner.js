const ExerciseSet = require('./src/exerciseset');

const exerciseSet = new ExerciseSet([
  {file: '01-anatomy', assertCount: 1},
  {file: '02-bedtime', assertCount: 2},
  {file: '03-one-treat-at-a-time', assertCount: 1},
  {file: '04-belly-rubs', assertCount: 2},
  {file: '05-microchip-scan', assertCount: 3},
]);

exerciseSet.runner();
