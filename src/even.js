import promptly from 'promptly';

export default async () => {
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const randomCount = (Math.random() * 10).toFixed(0);
  const isEven = (count) => (count % 2 === 0);

  console.log(`Question: ${randomCount}`);
  let answer = await promptly.prompt('Answer:');

  if (isEven(randomCount)) {
    console.log(answer == 'yes')
  } else{
    console.log(answer == 'no')
  }
};
