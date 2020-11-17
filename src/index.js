import promptly from 'promptly';

// Ядро игры
export default async (textRules, playGames) => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(`${textRules}`);

  const countSteps = 3;
  try {
    for (let i = 1; i <= countSteps; i += 1) {
      await playGames();
    }
    console.log(`Congratulations, ${name}!`);
  } catch (err) {
    console.error(`${err.message}`);
    console.error(`Let's try again, ${name}!`);
  }
};
