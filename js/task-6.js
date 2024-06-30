function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const input = document.querySelector("#controls input[type='number']");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", handleCreate);
function handleCreate() {
  if (input.value > 100 || input.value < 1) {
    return;
  }
  const divItems = [];
  boxes.innerHTML = "";
  for (let i = 0; i < input.value; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    divItems.push(div);
  }
  boxes.append(...divItems);
  input.value = "";
}
btnDestroy.addEventListener("click", handleDestroy);
function handleDestroy() {
  boxes.innerHTML = "";
  input.value = "";
}
