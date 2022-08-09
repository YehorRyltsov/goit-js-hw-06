function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let buttonCreate = document.querySelector(".data-create");
let buttonDestroy = document.querySelector(".data-destroy");
let boxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", createBoxes);

function createBoxes(amount) {
  for (let i = 0, quantity = 30; i < amount; i += 1, quantity += 10) {
    let color = getRandomHexColor();
    let box = `<div style ="width: ${quantity}px; hight: ${quantity}px; background-color: ${color};"> </div>`;
    return box;
  }
  elements.conteiner.append(...box);
}
