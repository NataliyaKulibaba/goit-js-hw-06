function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

btnEl.addEventListener('click', () => {

   document.body.style.background = getRandomHexColor();
   colorEl.textContent = getRandomHexColor();
});

