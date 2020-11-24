// Оболочка игры brain-prime
import promptly from 'promptly';
import { verify, makeRandomNumber } from '../function.js';

// Простое  ли  число
const isPrime = (number) => {
  let result = true;

  if (number === 1) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      result = false;
      break;
    }
  }

  return result;
};

export default async () => {
  const number = makeRandomNumber(100);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';

  console.log(`Question: ${number}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });
  verify(answer, rightAnswer);
};
