import promptly from 'promptly';

// Сообщение об ошибке
function messageError(answerUser, answerRight) {
  throw new Error(`"${answerUser}" is wrong answer ;(. Correct answer was "${answerRight}".`); // "nn" - это неправильный ответ ;(. правильным ответом было "nn".
}

// Рандомное число
const randomCount = () => Math.floor(Math.random() * 10);

// Четное ли  число для brain-games
const isEven = (count) => (count % 2 === 0 ? 'yes' : 'no');

// Проверка ответа
const checking = (answer, answerRight) => {
  if (answer === answerRight) {
    console.log('Correct!');
  } else {
    messageError(answer, answerRight);
  }
};

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
  const count = randomCount();
  const countEven = isEven(count);

  console.log(`Question: ${count}`);
  const answer = await promptly.prompt('Your answer: ', { retry: false });
  checking(answer, countEven);
};
