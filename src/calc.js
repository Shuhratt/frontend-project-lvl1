import promptly from 'promptly';

const message = (answerUser, answerRight) => {
  throw new Error(`"${answerUser}" is wrong answer ;(. Correct answer was "${answerRight}".`); // "nn" - это неправильный ответ ;(. правильным ответом было "nn".
};

const chars = ['+', '-', '*'];

const caseStudy = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

export default async () => {
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  try {
    for (let i = 1; i <= 3; i += 1) {
      const randomCount = () => Math.floor(Math.random() * 10);

    //core
      const first = randomCount();
      const second = randomCount();
      const randomChar = chars[Math.floor(Math.random() * chars.length)];
      const answerRight = () => Number(caseStudy[randomChar](first, second));
      console.log(`Question: ${first} ${randomChar} ${second}`);
    //end core

      const answer = await promptly.prompt('Your answer: ', { retry: false });

    //checking
      if (Number(answer) === answerRight()) {
        console.log('Correct!');
      } else {
        message(answer, answerRight());
      }
    // end checking
    }

    await console.log(`Congratulations, ${name}!`);
  } catch (err) {
    console.error(`${err.message}`);
    console.error(`Let's try again, ${name}!`);
  }
};
