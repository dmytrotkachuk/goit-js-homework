/*Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит 
количество элементов в input и нажимает кнопку Создать, после чего рендерится 
коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

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
const boxes = document.querySelector('#boxes')

render.addEventListener('click', createBoxes)
destroy.addEventListener('click', destroyBoxes)

const amount =  event =>{
  console.log(event.currentTarget.value)
  
  
}
inputAmount.addEventListener('change', amount)

function createBoxes (amount){
  const box = document.createElement('DIV')
  box.style.width = '30px'
  box.style.height = '30px'
  box.style.background = '#'+Math.random().toString(16).substr(-6);
  boxes.append(box)
  // console.log(event.currentTarget)

}
function destroyBoxes (event){
  boxes.innerHTML = ''
  // console.log(event.currentTarget)
}