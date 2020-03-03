const credits = 23580;
const pricePerDroid = 3000;
const ordered = prompt(`Какое количество дроидов Вы хотите купить?`);
const totalPrice = Number(ordered) * pricePerDroid;
let message;

if (ordered === null) {
  message = 'Отменено пользователем';
} else if (totalPrice < credits) {
  message = `Вы купили ${Number(ordered)} дроидов, на счету осталось ${credits -
    totalPrice} кредитов.`;
} else if (credits < totalPrice) {
  message = 'Недостаточно средств на счету!';
}

console.log(message);
