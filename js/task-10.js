'use strict'

const inputEl = document.querySelector('input');
const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');

const boxesEl = document.querySelector('#boxes');

let amount = inputEl.value;

console.log(amount);

const createBoxes = amount => {
  let count = document.createElement("div");
  let ru = count * amount;
  ru.push(boxesEl);
  
};


inputEl.addEventListener('focus ', () => {
  const amount = inputEl.value;
}
);

createEl.addEventListener('click', () => {
  createBoxes();
});



const destroyBoxes = () => boxesEl.reset();
