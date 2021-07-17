import getRandom from '../src/utils.js';
import runGame from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAnswer = () => {
  const gcd = getRandom(2, 20);
  const num1 = gcd * getRandom(2, gcd);
  const num2 = gcd * getRandom(2, gcd);
  return {
    question: `${num1} ${num2}`,
    correctAnswer: String(gcd),
  };
};

export default () => runGame(description, getQuestionAnswer);
