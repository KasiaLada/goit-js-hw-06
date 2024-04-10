const numbersOfCategory = document.querySelectorAll('.item');
let count = numbersOfCategory.length;
console.log(`Number of categories: ${count}`);
// ---------------------------

const categoryItems = document.querySelectorAll('#categories .item');

for (const item of categoryItems) {
	const header = item.querySelector('h2').textContent;
	const numberOfListItems = item.querySelectorAll('ul li').length;
	console.log(`Category: ${header}`);
	console.log(`Elements: ${numberOfListItems}`);
}
// Drugi sposób, nie wiem, który lepszy?

// const categoryItems = document.querySelectorAll('#categories .item');

// console.log(`Number of categories: ${categoryItems.length}`);


// categoryItems.forEach(item => {
//   const header = item.querySelector('h2').textContent;  
//   const numberOfListItems = item.querySelectorAll('ul li').length; 

//   console.log(`Category: ${header}`);
//   console.log(`Elements: ${numberOfListItems}`);
// });