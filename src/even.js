import promptly from 'promptly';

export default async () => {
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const randomCount = (Math.random() * 10).toFixed(0);
  const isEven = (count) => (count % 2 === 0);

  console.log(`Question: ${randomCount}`);
  const answer = await promptly.confirm('Answer:');

  if (isEven(randomCount)) {
    console.log('Answer:', answer === true ? answer : '');
  } else {
    console.log('Answer:', answer === false ? answer : '');
  }
};
