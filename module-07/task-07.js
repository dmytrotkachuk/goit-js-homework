/*
Напиши скрипт, который реагирует на изменение значения 
input#font-size-control (событие input) и изменяет инлайн-стиль 
span#text обновляя свойство font-size. В результате при перетаскивании
 ползунка будет меняться размер текста.

*/

const inputRange = document.querySelector('input#font-size-control')
const textToChange = document.querySelector('span#text')
// console.log(inputRange)
// console.log(textToChange)


inputRange.addEventListener('input', changeFontSize)

function changeFontSize (event){
    let size = inputRange.value;
    textToChange.style.fontSize = size + "px";
}