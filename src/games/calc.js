// Оболочка игры brain-calc
import promptly from 'promptly';
import { showRandomNumber, verify } from '../function.js';

const mathSigns = ['+', '-', '*'];

const mathSignsOperation = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

export default async () => {
  const first = showRandomNumber(100);
  const second = showRandomNumber(100);
  const randomChar = mathSigns[Math.floor(Math.random() * mathSigns.length)];
  const answerRight = Number(mathSignsOperation[randomChar](first, second));

  console.log(`Question: ${first} ${randomChar} ${second}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });

  verify(Number(answer) || answer, answerRight);
};
