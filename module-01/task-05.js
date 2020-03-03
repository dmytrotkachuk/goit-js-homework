let delivery = prompt('В какую страну вы хотите заказать доставку?');
let cost;

if (delivery === null) {
  console.log('Отменено пользователем');
} else {
  delivery.toLowerCase;
  switch (delivery) {
    case 'китай':
      cost = 100;
      break;
    case 'чили':
      cost = 250;
      break;
    case 'австралия':
      cost = 170;
      break;
    case 'индия':
      cost = 80;
      break;
    case 'ямайка':
      cost = 120;
      break;
    default:
      alert('В вашей стране доставка не доступна.');
  }
}

delivery = delivery[0].toUpperCase() + delivery.substr(1);
alert(`Доставка в ${delivery} будет стоить ${cost} кредитов`);
