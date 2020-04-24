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


const render = document.querySelector('button[data-action="render"]')
const destroy = document.querySelector('button[data-action="destroy"]')
const controls = document.querySelector('#controls')
const input = document.querySelector('#controls>input')
const boxes = document.querySelector('#boxes')

controls.addEventListener('click', onClick)


function onClick (e){
  if (e.target === render){
    const amount = Number(input.value) 
    createBoxes(amount)
  } 
  if (e.target === destroy){
    destroyBoxes()
  }
}

function createBoxes (amount){
  destroyBoxes()
  const randomColor = () => (Math.random() * 255).toFixed(0);
  let size = 30
  for (let i = 0 ; i < amount ; i++){
  const box = document.createElement('DIV')
  size += 10;
  const backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
  // const backgroundColor = '#'+Math.random().toString(16).substr(-6);
  box.setAttribute("style", 
  `width:${size}px;
  height:${size}px;
  background-color:${backgroundColor};`)
  
  boxes.append(box)
}}

function destroyBoxes (event){
  boxes.innerHTML = ''
  input.value = ''
}
