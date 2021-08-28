import { getRandom } from '../utils.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const getQuestionAnswer = () => {
  const divider = getRandom(2, 10);
  const num1 = divider * getRandom(2, 10);
  const num2 = divider * getRandom(2, 10);
  const gcd = findGcd(num1, num2);
  return {
    question: `${num1} ${num2}`,
    correctAnswer: String(gcd),
  };
};

export default () => runGame(description, getQuestionAnswer);
