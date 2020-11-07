// Оболочка игры brain-prime
import promptly from 'promptly';
import { checking, isPrime, randomCount } from '../src/function.js';

export default async () => {
  const count = randomCount(100);
  const countPrime = isPrime(count);

  console.log(`Question: ${count}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });
  checking(answer, countPrime);
};
