// Оболочка игры brain-prime
import promptly from 'promptly';
import { verify, showRandomNumber } from '../function.js';

// Простое  ли  число
const isPrime = (count) => {
  let result = true;
  for (let i = count - 1; i <= count && i > 1; i -= 1) {
    if (count % i === 0) {
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
