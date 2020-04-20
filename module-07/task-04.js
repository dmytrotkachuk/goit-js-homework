/*Счетчик состоит из спана и кнопок, которые должны увеличивать 
и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
*/

const buttonIncrement = document.querySelector('button[data-action = increment]')
const buttonDecrement = document.querySelector('button[data-action = decrement]')


buttonIncrement.addEventListener('click' , increment)
buttonDecrement.addEventListener('click' , decrement)

const counterValue = document.querySelector('#value')
let counter = 0

function increment (event){
  counter+=1
  counterValue.textContent = counter; 
}

function decrement(event){
  counter-=1
  counterValue.textContent = counter;
  
}
// 
// buttonIncrement.removeEventListener('click' , increment)
// buttonDecrement.removeEventListener('click' , decrement)