 'use strict'

const validatorInputEl = document.querySelector('#validation-input');
const inputDataLength = Number(validatorInputEl.dataset.length);


validatorInputEl.addEventListener("blur", () => {

  if (validatorInputEl.value.length === inputDataLength) {
    validatorInputEl.classList.add('valid');
    validatorInputEl.classList.remove('invalid');
  }

  else {
    validatorInputEl.classList.add('invalid');
    validatorInputEl.classList.remove('valid');
 }
});