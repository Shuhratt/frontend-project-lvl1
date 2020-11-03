import promptly from 'promptly';

// Сообщенеи об ошибке
function messageError (answerUser, answerRight)  {
  throw new Error(`"${answerUser}" is wrong answer ;(. Correct answer was "${answerRight}".`); // "nn" - это неправильный ответ ;(. правильным ответом было "nn".
}

// Проверка ответа
function checking (answer, answerRight) {
  if (answer === answerRight) {
    console.log('Correct!');
  } else {
    messageError(answer, answerRight);
  }
}

// Начало игры - Приветствие
export async function beginGames(textRules) {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(`${textRules}`);
}

// Ядро игр
export async function coreGames(core) {
  try {
    for (let i = 1; i <= 3; i += 1) {
      core()

      checking(answer, answerRight)
    }
    await console.log(`Congratulations, ${name}!`);
  } catch (err) {
    console.error(`${err.message}`);
    console.error(`Let's try again, ${name}!`);
  }
}


// Вопрос для игры brain-games
export function coreEven() {
  const randomCount = () => Math.floor(Math.random() * 10);
  console.log(`Question: ${randomCount()}`);
}
// Четное ли  число для brain-games
const isEven = (count) => (count % 2 === 0 ? 'yes' : 'no');




