import readlineSync from 'readline-sync';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getUserName = () => readlineSync.question('May I have your name? ');
const getUserAnswer = () => readlineSync.question('Your answer: ').toLowerCase();

export { getRandom, getUserName, getUserAnswer };
