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


createIngredientsList(ingredients);

function createIngredientsList() {
  const list = document.querySelector('#ingredients');
  for (const ingredient of ingredients) {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    list.append(listItem);
  }
}
