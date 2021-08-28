import { getRandom } from '../utils.js';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".\n';
const isEven = (number) => number % 2 === 0;

const getQuestionAnswer = () => {
  const number = getRandom(0, 100);
  return {
    question: number,
    correctAnswer: isEven(number) ? 'yes' : 'no',
  };
};

export default () => runGame(description, getQuestionAnswer);
