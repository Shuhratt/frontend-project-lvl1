import promptly from 'promptly';

export default async () => { // ? async
  const name = await promptly.prompt('May I have your name?'); // ? await
  console.log(`Hello, ${name}!`);
};
