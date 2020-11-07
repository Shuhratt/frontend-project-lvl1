// Оболочка игры brain-calc
import promptly from 'promptly';
import { randomCount, checking } from '../src/function.js';

const chars = ['+', '-', '*'];

const caseStudy = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

export default async () => {
  const first = randomCount(100);
  const second = randomCount(100);
  const randomChar = chars[Math.floor(Math.random() * chars.length)];
  const answerRight = () => Number(caseStudy[randomChar](first, second));

  console.log(`Question: ${first} ${randomChar} ${second}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });

  checking(Number(answer) || answer, answerRight());
};
