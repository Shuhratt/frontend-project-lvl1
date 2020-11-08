// Оболочка игры brain-even
import promptly from 'promptly';
import { randomCount, isEven, verify } from '../src/function.js';

export default async () => {
  const count = randomCount(100);
  console.log(`Question: ${count}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });
  const countEven = isEven(count);
  verify(answer, countEven);
};
