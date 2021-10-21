const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');


inputEl.addEventListener("change", (event) => {

  if (inputEl.value === "") {
   return outputEl.textContent = "Anonymous"
  }
  
  outputEl.textContent = event.currentTarget.value;
});

