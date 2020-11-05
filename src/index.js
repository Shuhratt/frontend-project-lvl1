import promptly from 'promptly';

// Сообщение об ошибке
const messageError = (answerUser, answerRight) => {
  throw new Error(`"${answerUser}" is wrong answer ;(. Correct answer was "${answerRight}".`); // "nn" - это неправильный ответ ;(. правильным ответом было "nn".
};

// Проверка ответа
const checking = (answerUser, answerRight) => {
  if (answerUser === answerRight) {
    console.log('Correct!');
  } else {
    messageError(answerUser, answerRight);
  }
};

// Рандомное число
const randomCount = (count) => Math.floor(Math.random() * count);

// Четное ли  число для brain-games
const isEven = (count) => (count % 2 === 0 ? 'yes' : 'no');

// Ядро игры
export const coreGames = async (textRules, conditions) => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(`${textRules}`);

  try {
    for (let i = 1; i <= 3; i += 1) {
      await conditions();
    }
    await console.log(`Congratulations, ${name}!`);
  } catch (err) {
    console.error(`${err.message}`);
    console.error(`Let's try again, ${name}!`);
  }
};

// Оболочка игры brain-even
export const conditionGamesEven = async () => {
  const count = randomCount(100);
  const countEven = isEven(count);

  console.log(`Question: ${count}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });
  checking(answer, countEven);
};

// Оболочка игры brain-calc
const chars = ['+', '-', '*'];

const caseStudy = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

export const conditionGamesCalc = async () => {
  const first = randomCount(100);
  const second = randomCount(100);
  const randomChar = chars[Math.floor(Math.random() * chars.length)];
  const answerRight = () => Number(caseStudy[randomChar](first, second));

  console.log(`Question: ${first} ${randomChar} ${second}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });

  checking(Number(answer), answerRight());
};

// Оболочка игры brain-gcd

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

// Оболочка игры brain-progression

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

  const ruleCountMin = countProgression > 5 ? countProgression : 5;
  const ruleCountMax = ruleCountMin > 10 ? 10 : ruleCountMin;

  const listProgression = progression(stepProgression, ruleCountMax);
  const randomIndex = Math.floor(Math.random() * listProgression.length);

  const listProgressionForUser = listProgression.map((item, index) => (index === randomIndex ? '..' : item));

  console.log(`Question: ${listProgressionForUser.join(' ')}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });
  checking(Number(answer) || answer, listProgression[randomIndex]);
};
