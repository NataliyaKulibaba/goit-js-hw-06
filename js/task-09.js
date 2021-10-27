function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

btnEl.addEventListener('click', () => {

  const getRandomColor = getRandomHexColor();

   document.body.style.background = getRandomColor;
   colorEl.textContent = getRandomColor;
});

