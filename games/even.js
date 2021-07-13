import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = (number) => number % 2 === 0;

const runGame = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

  const gameSteps = 3;
  for (let step = 1; step <= gameSteps; step += 1) {
    const number = getRandom(0, 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log('Correct!\n');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\n`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congradulations, ${userName}!`);
};

export default runGame;
