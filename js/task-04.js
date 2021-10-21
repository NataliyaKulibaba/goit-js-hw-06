const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },

}

const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementEl.addEventListener("click", () => {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
});

incrementEl.addEventListener("click", () => {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
});



