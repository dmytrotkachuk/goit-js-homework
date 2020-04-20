/*Напиши скрипт который, при наборе текста в инпуте 
input#name-input (событие input), подставляет его 
текущее значение в span#name-output. Если инпут пустой, 
в спане должна отображаться строка 'незнакомец'.
*/

const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

input.addEventListener('input', changeOutput)


function changeOutput (event){
    output.textContent = event.currentTarget.value
    
}

// input.removeEventListener('input', changeOutput)