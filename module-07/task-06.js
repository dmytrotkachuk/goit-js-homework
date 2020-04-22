

const input = document.querySelector('input#validation-input')
input.addEventListener('input', inputValidation)

function inputValidation(event){
  if (event.currentTarget.value.length === 6){
    input.classList.remove('invalid')
    input.classList.add('valid')
  } else {
    input.classList.remove('valid')
    input.classList.add('invalid')}


  input.removeEventListener('change', inputValidation)
}

