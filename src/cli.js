import promptly from 'promptly';

export default async () => { // ? await
    const name = await promptly.prompt('May I have your name?'); // ? await
    console.log(`Hello, ${name}!`)
};