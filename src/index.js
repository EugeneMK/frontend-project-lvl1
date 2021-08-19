import { greeting, getUserAnswer } from './cli.js';

const numberOfSteps = 3;

const runGame = (description, getQuestionAnswer) => {
  const userName = greeting();
  console.log(description);

  for (let step = 1; step <= numberOfSteps; step += 1) {
    const { question, correctAnswer } = getQuestionAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = getUserAnswer();

    if (userAnswer === correctAnswer) {
      console.log('Correct!\n');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\n`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
