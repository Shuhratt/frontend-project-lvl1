// Оболочка игры brain-gcd

import promptly from "promptly";
import {checking, randomCount} from "../src/function.js";

const gcd = (first, second) => {
  const maxCount = Math.max(first, second);
  const listAllCount = [];

  for (let i = 1; i <= maxCount; i += 1) {
    if (first % i === 0 && second % i === 0) {
      listAllCount.push(i);
    }
  }

  return Number(Math.max(...listAllCount));
};

export const conditionGamesGcd = async () => {
  const first = randomCount(100);
  const second = randomCount(100);

  const answerRightGcd = gcd(first, second);

  console.log(`Question: ${first} ${second}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });

  checking(Number(answer) || answer, answerRightGcd);
};