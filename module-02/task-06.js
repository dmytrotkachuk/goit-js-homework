let input;
const numbers = [];
let total = 0;
let message;

do {
  message = prompt('Введите число');
  input = Number(message);

  if (Number.isNaN(Number(message))) {
    alert('Это не число!');
  } else {
    if (message !== null) {
      numbers.push(input);
    }
  }
} while (message !== null);

if (message === null) {
  for (const number of numbers) {
    total += number;
  }
}

if (message === null && numbers < 1) {
  console.log('Отменено пользователем.');
} else {
  console.log(`Cумма сложения составила " ${total} "`);
}

// Создать сообщение "Введите число"
// преобразовать введенные данные в число и сохранить в input
// Ели не число , сказать пользователю
// Если число, то довавить в массив numbers
// Если null суммировать всех числа в массиве в переменную total через for...of
//  Вывести результат
