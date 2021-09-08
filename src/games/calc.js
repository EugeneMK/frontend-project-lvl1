import { getRandom } from '../utils.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  const math = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  return math[operator](num1, num2);
};

const getQuestionAnswer = () => {
  const num1 = getRandom(1, 20);
  const num2 = getRandom(1, 20);
  const operator = operators[getRandom(0, 2)];
  const result = calculate(num1, num2, operator);
  return {
    question: `${num1} ${operator} ${num2}`,
    correctAnswer: String(result),
  };
};

export default () => runGame(description, getQuestionAnswer);
