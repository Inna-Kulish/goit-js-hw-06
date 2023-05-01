const input = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {

    nameLabel.textContent = event.target.value.trim() === '' ? 'Anonymous' : event.target.value.trim();
}