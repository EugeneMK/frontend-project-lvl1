import { getRandom } from '../utils.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (startNum, step) => {
  const progression = [];
  const lastNum = startNum + step * (progressionLength - 1);
  for (let i = startNum; i <= lastNum; i += step) {
    progression.push(i);
  }
  return progression;
};

const hideElement = (progression, hiddenNumPosition) => {
  const progressionWithHidden = [...progression];
  progressionWithHidden[hiddenNumPosition] = '..';
  return progressionWithHidden;
};

const getQuestionAnswer = () => {
  const startNum = getRandom(0, 20);
  const step = getRandom(2, 10);
  const hiddenNumPosition = getRandom(0, progressionLength - 1);
  const progression = getProgression(startNum, step);
  const progressionWithHidden = hideElement(progression, hiddenNumPosition);
  const answer = startNum + hiddenNumPosition * step;

  return {
    question: progressionWithHidden.join(' '),
    correctAnswer: String(answer),
  };
};

export default () => runGame(description, getQuestionAnswer);
