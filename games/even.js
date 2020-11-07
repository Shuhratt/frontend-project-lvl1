// Оболочка игры brain-even
import promptly from 'promptly';
import { randomCount, isEven, verify } from '../src/function.js';

export default async () => {
  const count = randomCount(100);
  const countEven = isEven(count);

  console.log(`Question: ${count}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });
  verify(answer, countEven);
};
