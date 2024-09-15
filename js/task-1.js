const categoryItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(categoryItem => {
  const categoryTitle = categoryItem.querySelector('h2').textContent;
  const subItems = categoryItem.querySelectorAll('ul > li');

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${subItems.length}`);
});
