import promptly from 'promptly';

const validator =  (value) => {
  if(value !== 'yes'){
    throw new Error('"yes" is wrong answer ;(. Correct answer was "no".'); // "да" - это неправильный ответ; (правильный ответ был "нет"
  } else{
    console.log(`Correct!`);
  }
};

export default async () => {
  const name = await promptly.prompt('May I have your name?');
  let userAnswers = []
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const randomCount = (Math.random() * 10).toFixed(0) || 1;
  const isEven = (count) => (count % 2 === 0);

    try {
      if(userAnswers.length === 3){

      }
      console.log(`Question: ${randomCount}`);

      if (isEven(randomCount)) {
        const answerEvenTrue = await promptly.prompt('Your answer: ', { validator, retry: false });
      } else {

      }


    } catch (err) {
      console.error(`${err.message}`);
      console.error(`Let\'s try again, ${name}!`)
    }




  // npm list -g --depth=0
};
