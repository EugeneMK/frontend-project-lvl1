import readlineSync from 'readline-sync';

const greeting = () => console.log('Welcome to the Brain Games!\n');

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export { greeting, getUserName };
