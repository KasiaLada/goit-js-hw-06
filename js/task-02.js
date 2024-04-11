const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');

const listFragment = document.createElement('ul');

ingredients.forEach((ingredient) => {
	const listItem = document.createElement('li');
	listItem.textContent = ingredient;
	listItem.classList.add('item');
	listFragment.appendChild(listItem);
});

ingredientsList.appendChild(listFragment);
