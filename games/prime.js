// Оболочка игры brain-prime
import promptly from 'promptly';
import { verify, isPrime, randomCount } from '../src/function.js';

export default async () => {
  const count = randomCount(100);
  const countPrime = isPrime(count);

  console.log(`Question: ${count}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });
  verify(answer, countPrime);
};
