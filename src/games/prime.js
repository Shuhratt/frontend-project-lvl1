// Оболочка игры brain-prime
import promptly from 'promptly';
import { verify, showRandomNumber } from '../function.js';

// Простое  ли  число
const isPrime = (number) => {
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
  const count = showRandomNumber(100);
  const countPrime = isPrime(count);

  console.log(`Question: ${count}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });
  verify(answer, countPrime);
};
