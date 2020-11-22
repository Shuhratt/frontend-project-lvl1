// Оболочка игры brain-progression
import promptly from 'promptly';
import { verify, makeRandomNumber } from '../function.js';

const buildNumbersProgression = (stepProgression, maxCount) => {
  const progressionArr = [];

  for (let i = stepProgression; progressionArr.length <= maxCount; i += stepProgression) {
    progressionArr.push(i);
  }

  return progressionArr;
};

export default async () => {
  const stepProgression = makeRandomNumber(10);
  const countProgression = makeRandomNumber(10);

  const minNumber = 5;
  const maxNumber = 10;
  const ruleNumberMin = countProgression > minNumber ? countProgression : minNumber;
  const ruleNumberMax = ruleNumberMin > maxNumber ? maxNumber : ruleNumberMin;

  const listProgression = buildNumbersProgression(stepProgression, ruleNumberMax);
  const randomIndex = Math.floor(Math.random() * listProgression.length);

  const listProgressionForUser = listProgression.map((item, index) => (index === randomIndex ? '..' : item));

  console.log(`Question: ${listProgressionForUser.join(' ')}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });
  verify(Number(answer) || answer, listProgression[randomIndex]);
};
