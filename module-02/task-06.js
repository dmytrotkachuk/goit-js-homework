let input;
const numbers = [];
let total = 0;
let message;

do {
  message = prompt('Введите число');

  if (message !== null) {
    input = Number(message);
    numbers.push(input);
    if (Number.isNaN(Number(message))) {
      alert('Это не число!');
    }
  }
} while (message !== null);

if (message === null && numbers.length >= 1) {
  for (const number of numbers) {
    total += number;
  }
  console.log(`Cумма сложения составила " ${total} "`);
}
