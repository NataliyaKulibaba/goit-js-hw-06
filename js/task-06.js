const validatorInputEl = document.querySelector('#validation-input');

validatorInputEl.addEventListener("blur", () => {
  validatorInputEl.length = validatorInputEl.data - length;
  
  console.log(validatorInputEl.length);
});
console.log(validatorInputEl);