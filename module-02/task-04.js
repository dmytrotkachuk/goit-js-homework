const formatString = function(string) {
  // твой код
  const stringLength = string.length;
  const limitOfLength = 40;

  if (stringLength > limitOfLength) {
    let slicedString = string.slice(0, 40);
    // console.log(slicedString.length);
    return slicedString + '...';
  } else {
    // console.log(string.length);
    return string;
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'
  )
);
// вернется форматированная строка
