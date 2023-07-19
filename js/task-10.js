function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
  function createBoxes(amount) {
    const boxesDiv = document.querySelector("#boxes");
    boxesDiv.innerHTML = ""; // очищаем содержимое

    let size = 30; // размер первого элемента
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesDiv.appendChild(box);
      size += 10; // увеличиваем размер для следующего элемента
    }
  }

  function destroyBoxes() {
    const boxesDiv = document.querySelector("#boxes");
    boxesDiv.innerHTML = ""; // очищаем содержимое
  }

  const createButton = document.querySelector('[data-create]');
  createButton.addEventListener('click', () => {
    const input = document.querySelector('input');
    const amount = parseInt(input.value);
    createBoxes(amount);
  });

  const destroyButton = document.querySelector('[data-destroy]');
  destroyButton.addEventListener('click', () => {
    destroyBoxes();
  });