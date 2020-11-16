// Оболочка игры brain-even
import promptly from 'promptly';
import { showRandomNumber, verify } from '../function.js';

// Четное ли  число
const isEven = (count) => (count % 2 === 0 ? 'yes' : 'no');

export default async () => {
  const count = showRandomNumber(100);
  console.log(`Question: ${count}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });
  const countEven = isEven(count);
  verify(answer, countEven);
};
