/*
Напиши скрипт, который для каждого элемента массива 
ingredients создаст отдельный li, после чего вставит 
все li за одну операцию в список ul.ingredients. Для 
создания DOM-узлов используй document.createElement().
*/


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы'
];


const list = document.querySelector('#ingredients')
const items = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  return item
})
list.append(...items)
// console.log(list)


