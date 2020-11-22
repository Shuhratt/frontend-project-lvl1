// Оболочка игры brain-progression
import promptly from 'promptly';
import { verify, makeRandomNumber } from '../function.js';

const buildNumbersProgression = (firstNumber, stepProgression, maxCount) => {
  const progressionList = [];

  for (let i = firstNumber; progressionList.length <= maxCount; i += stepProgression) {
    progressionList.push(i);
  }

  return progressionList;
};

export default async () => {
  const startNum = makeRandomNumber(10);
  const stepProgression = makeRandomNumber(10);
  const maxNumberProgression = makeRandomNumber(10);

  const minNumber = 5;
  const maxNumber = 10;
  const acceptanceNumberMin = maxNumberProgression > minNumber ? maxNumberProgression : minNumber;
  const acceptanceNumberMax = acceptanceNumberMin > maxNumber ? maxNumber : acceptanceNumberMin;

  const listProgression = buildNumbersProgression(startNum, stepProgression, acceptanceNumberMax);
  const randomIndex = Math.floor(Math.random() * listProgression.length);

  const listProgressionForUser = listProgression.map((item, index) => (index === randomIndex ? '..' : item));

  console.log(`Question: ${listProgressionForUser.join(' ')}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });
  verify(Number(answer) || answer, listProgression[randomIndex]);
};
