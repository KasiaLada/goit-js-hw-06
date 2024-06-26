const button = document.querySelector('button');
const span = document.querySelector('span');

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const colorChanger = () => {
	const newColor = getRandomHexColor();
	document.body.style.backgroundColor = newColor;
	span.textContent = newColor;
};

button.addEventListener('click', colorChanger);
