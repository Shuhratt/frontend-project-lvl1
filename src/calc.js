import promptly from 'promptly';

const message = (answerUser, answerRight) => {
  throw new Error(`"${answerUser}" is wrong answer ;(. Correct answer was "${answerRight}".`); // "nn" - это неправильный ответ ;(. правильным ответом было "nn".
};

const caseStudy = (first, second, character) => {
  return `${first} ${character} ${second}`
}

const chars = ['+','-','*']




export default async () => {
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  try {
    for (let i = 1; i <= 3; i += 1) {

      const randomCount = () => {
        return (Math.random() * 100).toFixed(0)
      };

      const randomChar = chars[Math.floor(Math.random() * chars.length)]

      console.log(`Question: ${caseStudy(randomCount(), randomChar, randomCount() )}`);
      const answer = await promptly.prompt('Your answer: ', { retry: false });

      // if (answer === isEven(randomCount)) {
      //   console.log('Correct!');
      // } else {
      //   message(answer, isEven(randomCount));
      // }
    }

    await console.log(`Congratulations, ${name}!`);
  } catch (err) {
    console.error(`${err.message}`);
    console.error(`Let's try again, ${name}!`);
  }
};