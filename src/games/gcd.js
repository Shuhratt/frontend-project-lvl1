// Оболочка игры brain-gcd

import promptly from 'promptly';
import { verify, showRandomNumber } from '../function.js';

const gcd = (first, second) => {
  const maxNumber = Math.max(first, second);
  const listAllCount = [];

  for (let i = 1; i <= maxNumber; i += 1) {
    if (first % i === 0 && second % i === 0) {
      listAllCount.push(i);
    }
  }

  return Number(Math.max(...listAllCount));
};

export default async () => {
  const first = showRandomNumber(100);
  const second = showRandomNumber(100);

  const answerRightGcd = gcd(first, second);

  console.log(`Question: ${first} ${second}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });

  verify(Number(answer) || answer, answerRightGcd);
};