// Сообщение об ошибке
export const messageError = (answerUser, answerRight) => {
  throw new Error(`"${answerUser}" is wrong answer ;(. Correct answer was "${answerRight}".`); // "nn" - это неправильный ответ ;(. правильным ответом было "nn".
};

// Проверка ответа
export const checking = (answerUser, answerRight) => {
  if (answerUser === answerRight) {
    console.log('Correct!');
  } else {
    messageError(answerUser, answerRight);
  }
};

// Рандомное число
export const randomCount = (count) => Math.floor(Math.random() * count);

// Четное ли  число для brain-games
export const isEven = (count) => (count % 2 === 0 ? 'yes' : 'no');

// Натуральное ли  число для brain-prime
export const isPrime = (count) => {
  let result = true;
  for (let i = count - 1; i <= count && i > 1; i -= 1) {
    if (count % i === 0) {
      result = false;
      break;
    }
  }

  return result ? 'yes' : 'no';
};
