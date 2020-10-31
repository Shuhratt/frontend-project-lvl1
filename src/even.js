import promptly from 'promptly';

const isEven = (count) => (count % 2 === 0 ? 'yes' : 'no');

const message = (answerUser, answerRight) => {
  throw new Error(`"${answerUser}" is wrong answer ;(. Correct answer was "${answerRight}".`); // "nn" - это неправильный ответ ;(. правильным ответом было "nn".
};

export default async () => {
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  try {
    for (let i = 1; i <= 3; i += 1) {
      const randomCount = (Math.random() * 100).toFixed(0);
      console.log(`Question: ${randomCount}`);
      const answer = await promptly.prompt('Your answer: ', { retry: false });

      if (answer === isEven(randomCount)) {
        console.log('Correct!');
      } else {
        message(answer, isEven(randomCount));
      }
    }

    await console.log(`Congratulations, ${name}!`);
  } catch (err) {
    console.error(`${err.message}`);
    console.error(`Let's try again, ${name}!`);
  }
};
