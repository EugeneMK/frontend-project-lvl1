import getRandom from '../src/utils.js';
import runGame from '../src/index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const math = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getQuestionAnswer = () => {
  const num1 = getRandom(1, 20);
  const num2 = getRandom(1, 20);
  const operator = operators[getRandom(0, 2)];
  const result = math[operator](num1, num2);
  return {
    question: `${num1} ${operator} ${num2}`,
    correctAnswer: String(result),
  };
};

export default () => runGame(description, getQuestionAnswer);
