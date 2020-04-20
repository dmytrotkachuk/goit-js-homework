

const input = document.querySelector('input#validation-input')
input.addEventListener('change', inputValidation)

function inputValidation(event){
  if (event.currentTarget.value.length === 6){
    input.classList.add('valid')
  } else {input.classList.add('invalid')}
  input.removeEventListener('change', inputValidation)
}

