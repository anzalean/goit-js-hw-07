const input = document.querySelector('input#name-input');
const span = document.querySelector('span#name-output');
input.addEventListener('input', handleInput);
function handleInput() {
    span.textContent = input.value.trim() ? input.value.trim() : 'Anonymous';
}