const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const ingredientEl = ingredients.map(ingredient => {
  const ingredientsItemEl = document.createElement("li");
  
  ingredientsItemEl.classList.add('item');

  ingredientsItemEl.textContent = ingredient;
  
   ingredientsListEl.append(ingredientsItemEl);
});

