const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

console.log(ingredientsListEl);



const ingredientEl = ingredients.map(ingredient => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.classList.add('item');


  ingredientsItemEl.textContent = ingredient;
  
 
  console.log(ingredientsItemEl);
  ingredientsListEl.append(ingredientsItemEl);
});

