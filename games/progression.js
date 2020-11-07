// Оболочка игры brain-progression
import promptly from "promptly";
import {checking, randomCount} from "../src/function.js";

const progression = (stepProgression, maxCount) => {
  const progressionArr = [];

  for (let i = stepProgression; progressionArr.length <= maxCount; i += stepProgression) {
    progressionArr.push(i);
  }

  return progressionArr;
};

export const conditionGamesProgress = async () => {
  const stepProgression = randomCount(10);
  const countProgression = randomCount(10);

  const minCount = 5
  const maxCount = 10
  const ruleCountMin = countProgression > minCount ? countProgression : minCount;
  const ruleCountMax = ruleCountMin > maxCount ? maxCount : ruleCountMin;

  const listProgression = progression(stepProgression, ruleCountMax);
  const randomIndex = Math.floor(Math.random() * listProgression.length);

  const listProgressionForUser = listProgression.map((item, index) => (index === randomIndex ? '..' : item));

  console.log(`Question: ${listProgressionForUser.join(' ')}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });
  checking(Number(answer) || answer, listProgression[randomIndex]);
};

