 'use strict'

const validatorInputEl = document.querySelector('#validation-input');
const inputDataLength = Number(validatorInputEl.dataset.length);


validatorInputEl.addEventListener("blur", changeColorInputEl);

function changeColorInputEl() {

  if (validatorInputEl.value.length === inputDataLength) {
    validatorInputEl.classList.add('valid');
    validatorInputEl.classList.remove('invalid');
    return;
  }

      validatorInputEl.classList.add('invalid');
    validatorInputEl.classList.remove('valid');
  return;
};