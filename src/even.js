import promptly from 'promptly';

const isEven = (count) => (count % 2 === 0);

const validator =  (value) => {
  if(value == 'yes'){
    console.log(`Correct!`);
  } else {
    throw new Error('"yes" is wrong answer ;(. Correct answer was "no".'); // "да" - это неправильный ответ; (правильный ответ был "нет"
  }

};

export default async () => {
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

    try {
      let i = 1
      while (i <= 3) {
        let randomCount = (Math.random() * 10).toFixed(0);
        console.log(`Question: ${randomCount}`);
        const answerEvenTrue = await promptly.prompt('Your answer: ', { validator, retry: false });
        i++
      }
      await console.log(`Congratulations, ${name}!`)

    } catch (err) {
      console.error(`${err.message}`);
      console.error(`Let\'s try again, ${name}!`)
    }


  // npm list -g --depth=0
};
