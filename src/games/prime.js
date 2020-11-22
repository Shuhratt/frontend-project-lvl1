// Оболочка игры brain-prime
import promptly from 'promptly';
import { verify, makeRandomNumber } from '../function.js';

// Простое  ли  число
const makePrimeNumber = (number) => {
  let result = true;

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      result = false;
      break;
    }
  }

  return result ? 'yes' : 'no';
};

export default async () => {
  const number = makeRandomNumber(100);
  const rightPrimeNumber = makePrimeNumber(number);

  console.log(`Question: ${number}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });
  verify(answer, rightPrimeNumber);
};
