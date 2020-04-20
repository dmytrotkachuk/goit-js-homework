/*Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше 
предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.

*/


const render= document.querySelector('button[data-action="render"]')
const destroy= document.querySelector('button[data-action="destroy"]')
const inputAmount = document.querySelector('#controls>input')
console.log(inputAmount)
render.addEventListener('click', createBoxes)
destroy.addEventListener('click', destroyBoxes)
inputAmount.addEventListener('change', event => 
console.log(event.currentTarget.value))

// function amount (){}
function createBoxes (event){
  console.log(event.currentTarget)
  //создает div
  // div имеет случайный цвет
  // первый div  30px на 30px
  // каждый последующий div выше и шире предыдущего на 10px
  // div
}
function destroyBoxes (event){
  // удаляет все div в div#boxes
  console.log(event.currentTarget)
}