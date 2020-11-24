// Оболочка игры brain-even
import promptly from 'promptly';
import { makeRandomNumber, verify } from '../function.js';

// Четное ли  число
const isEven = (count) => (count % 2 === 0);

export default async () => {
  const number = makeRandomNumber(100);
  console.log(`Question: ${number}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  verify(answer, rightAnswer);
};
