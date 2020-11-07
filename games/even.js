// Оболочка игры brain-even
import promptly from "promptly";
import { randomCount, isEven, checking } from '../src/function.js';

export const conditionGamesEven = async () => {
  const count = randomCount(100);
  const countEven = isEven(count);

  console.log(`Question: ${count}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });
  checking(answer, countEven);
};