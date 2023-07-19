const input = document.querySelector('input[data-length]');

input.addEventListener('blur', () => {
  input.classList.toggle('valid', input.value.length === +input.dataset.length);
  input.classList.toggle('invalid', input.value.length !== +input.dataset.length);
});
