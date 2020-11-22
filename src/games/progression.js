// Оболочка игры brain-progression
import promptly from 'promptly';
import { verify, makeRandomNumber } from '../function.js';

const buildNumbersProgression = (firstNumber, stepProgression, maxCount) => {
  const progressionArr = [];

  for (let i = firstNumber; progressionArr.length <= maxCount; i += stepProgression) {
    progressionArr.push(i);
  }

  return progressionArr;
};

export default async () => {
  const startNum = makeRandomNumber(10);
  const stepProgression = makeRandomNumber(10);
  const maxNumberProgression = makeRandomNumber(10);

  const minNumber = 5;
  const maxNumber = 10;
  const acceptNumberMin = maxNumberProgression > minNumber ? maxNumberProgression : minNumber;
  const acceptNumberMax = acceptNumberMin > maxNumber ? maxNumber : acceptNumberMin;

  const listProgression = buildNumbersProgression(startNum, stepProgression, acceptNumberMax);
  const randomIndex = Math.floor(Math.random() * listProgression.length);

  const listProgressionForUser = listProgression.map((item, index) => (index === randomIndex ? '..' : item));

  console.log(`Question: ${listProgressionForUser.join(' ')}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });
  verify(Number(answer) || answer, listProgression[randomIndex]);
};
