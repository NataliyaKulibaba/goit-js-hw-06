const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');
const addNewDiv = document.createDocumentFragment();

const ingredientEl = ingredients.map(ingredient => {

  const ingredientsItemEl = document.createElement("li");
    ingredientsItemEl.classList.add('item');
  ingredientsItemEl.textContent = ingredient;

    return ingredientsItemEl;
}
    
);
ingredientsListEl.append(...ingredientEl);




