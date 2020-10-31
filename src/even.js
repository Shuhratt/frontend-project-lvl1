import promptly from 'promptly';

const isEven = (count) => (count % 2 === 0 ? 'yes' : 'no');

const messageError = (answer, answerRight) => {
  throw new Error(`"${answer}" is wrong answer ;(. Correct answer was "${answerRight}".`); // "да" - это неправильный ответ ;(. правильным ответом было "нет".
};

export default async () => {
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  try {
    let i = 1;
    while (i <= 3) {
      const randomCount = (Math.random() * 10).toFixed(0);
      console.log(`Question: ${randomCount}`);
      const answer = await promptly.prompt('Your answer: ', { retry: false });

      if (isEven(randomCount) === 'yes') {
        if (answer === 'yes') {
          console.log('Correct!');
        } else {
          messageError(answer, isEven(randomCount));
        }
      } else if (answer === 'no') {
        console.log('Correct!');
      } else {
        messageError(answer, isEven(randomCount));
      }

      i += 1;
    }
    await console.log(`Congratulations, ${name}!`);
  } catch (err) {
    console.error(`${err.message}`);
    console.error(`Let's try again, ${name}!`);
  }
};
