import readlineSync from 'readline-sync';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getUserAnswer = () => readlineSync.question('Your answer: ').toLowerCase();

export { getRandom, getUserAnswer };
