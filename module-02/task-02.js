const calculateEngravingPrice = function(message, pricePerWord) {
  let words = message.split(' ');
  return words.length * pricePerWord;
};
// разбить строку на массив
// длину массива * на стоимость одного слова

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20
  )
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)
); // 120
