// Сообщение об ошибке
export const showMessageError = (answerUser, answerRight) => {
  throw new Error(`"${answerUser}" is wrong answer ;(. Correct answer was "${answerRight}".`); // "nn" - это неправильный ответ ;(. правильным ответом было "nn".
};

// Проверка ответа
export const verify = (answerUser, answerRight) => {
  if (answerUser === answerRight) {
    console.log('Correct!');
  } else {
    showMessageError(answerUser, answerRight);
  }
};

// Рандомное число
export const showRandomNumber = (count) => Math.ceil(Math.random() * count);
