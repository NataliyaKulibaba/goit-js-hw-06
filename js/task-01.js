const categoriesEl = document.querySelector('#categories');

const numberOfCategories = categoriesEl.children.length;
console.log(`Number of categories:`, numberOfCategories);


const listEl = document.querySelectorAll('.item');

listEl.forEach(item => {
  
   console.log(`Category:`, item.firstElementChild.textContent);
  console.log(`Elements:`, item.lastElementChild.children.length);
});



