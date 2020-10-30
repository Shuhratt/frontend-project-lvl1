import promptly from 'promptly';

export default async () => {
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  const work = await promptly.prompt('Че ка делал');
};