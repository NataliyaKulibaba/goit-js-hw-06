'use strict'

const inputEl = document.querySelector('input');
const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');
const addNewDiv = document.createDocumentFragment();
const boxesEl = document.querySelector('#boxes');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let size = 20;

function createNewEl() {
  let createOneBoxesEl = document.createElement("div");
  createOneBoxesEl.style.background = getRandomHexColor();

  size += 10;

  createOneBoxesEl.style.width = `${size}px`;
  createOneBoxesEl.style.height = `${size}px`;
  
  return createOneBoxesEl;
}
 

function createBoxes(amount) {

    for (let i = 1; i <= amount; i += 1) {
      addNewDiv.appendChild(createNewEl());
}
  boxesEl.appendChild(addNewDiv); 
}
  

function createBoxexByClick() { createBoxes(inputEl.value); inputEl.value = "";};
createEl.addEventListener('click', createBoxexByClick);


function destroyBoxes() { boxesEl.textContent = ""; size = 20; }
destroyEl.addEventListener('click', destroyBoxes);




// function createBoxes(amount) {

//   const newArray = [];
// console.log()


//   newArray[amount] = amount;
//   console.log(newArray);

//   newArray.forEach((el) => {
//     addNewDiv.appendChild(createNewEl());
//   });
//   boxesEl.appendChild(addNewDiv); 
// }