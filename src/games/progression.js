// Оболочка игры brain-progression
import promptly from 'promptly';
import { verify, makeRandomNumber } from '../function.js';

const buildProgression = (firstNumber, stepProgression, maxLength) => {
  const progressionList = [];
  for (let i = firstNumber; progressionList.length <= maxLength; i += stepProgression) {
    progressionList.push(i);
  }
  return progressionList;
};

const fundLengthProgression = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export default async () => {
  const minLengthDefault = 5; // Минимальная длина по умолчанию
  const maxLengthDefault = 10; // Максимальная длина по умолчанию
  const maxLengthProgression = fundLengthProgression(minLengthDefault, maxLengthDefault);

  const firstNumber = makeRandomNumber(10); // Первое число прогрессии
  const stepProgression = makeRandomNumber(10); // Шаг прогрессии

  const rightAnswer = buildProgression(firstNumber, stepProgression, maxLengthProgression);
  const randomIndex = Math.floor(Math.random() * rightAnswer.length);

  const listProgressionForUser = rightAnswer.map((item, index) => (index === randomIndex ? '..' : item));

  console.log(`Question: ${listProgressionForUser.join(' ')}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });
  verify(Number(answer) || answer, rightAnswer[randomIndex]);
};
