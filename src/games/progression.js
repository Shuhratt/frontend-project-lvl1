// Оболочка игры brain-progression
import promptly from 'promptly';
import { verify, makeRandomNumber } from '../function.js';

const buildProgression = (minNumber, stepProgression, maxLengthNumber) => {
  const progressionList = [];

  for (let i = minNumber; progressionList.length <= maxLengthNumber; i += stepProgression) {
    progressionList.push(i);
  }

  return progressionList;
};

export default async () => {
  const minLengthProgression = 5; // Минимальная длина
  const maxLengthProgression = 10; // Максимальная длина

  let firstNumber = makeRandomNumber(10); // Первое число прогрессии
  const stepProgression = makeRandomNumber(10); // Шаг прогрессии
  let maxLengthProgressionRandom = makeRandomNumber(10); // Максимальная длина прогрессии

  console.log(firstNumber, maxLengthProgressionRandom);

  firstNumber = firstNumber > minLengthProgression ? firstNumber : minLengthProgression;
  maxLengthProgressionRandom = maxLengthProgressionRandom > maxLengthProgression ? maxLengthProgressionRandom : maxLengthProgression;

  console.log(firstNumber, maxLengthProgressionRandom);
  const rightAnswer = buildProgression(firstNumber, stepProgression, maxLengthProgressionRandom);
  const randomIndex = Math.floor(Math.random() * rightAnswer.length);

  const listProgressionForUser = rightAnswer.map((item, index) => (index === randomIndex ? '..' : item));

  console.log(`Question: ${listProgressionForUser.join(' ')}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });
  verify(Number(answer) || answer, rightAnswer[randomIndex]);
};
