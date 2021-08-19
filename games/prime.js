import getRandom from '../src/utils.js';
import runGame from '../src/index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const maxDivider = Math.sqrt(num);
  for (let i = 2; i <= maxDivider; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAnswer = () => {
  const number = getRandom(0, 100);
  return {
    question: number,
    correctAnswer: isPrime(number) ? 'yes' : 'no',
  };
};

export default () => runGame(description, getQuestionAnswer);
