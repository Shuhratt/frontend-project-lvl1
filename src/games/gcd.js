// Оболочка игры brain-gcd

import promptly from 'promptly';
import { verify, makeRandomNumber } from '../function.js';

const gcd = (first, second) => {
  const minNumber = Math.min(first, second);
  const listAllNumbers = [];

  for (let i = 1; i <= minNumber; i += 1) {
    if (first % i === 0 && second % i === 0) {
      listAllNumbers.push(i);
    }
  }

  return Number(Math.max(...listAllNumbers));
};

export default async () => {
  const first = makeRandomNumber(100);
  const second = makeRandomNumber(100);

  const answerRightGcd = gcd(first, second);

  console.log(`Question: ${first} ${second}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });

  verify(Number(answer) || answer, answerRightGcd);
};
