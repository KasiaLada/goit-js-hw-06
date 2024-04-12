const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
	if (event.currentTarget.value === '') {
		nameOutput.textContent = 'Anonymus';
	} else {
		nameOutput.textContent = event.currentTarget.value;
	}
});
