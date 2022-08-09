function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let buttonCreate = document.querySelector(".data-create");
let buttonDestroy = document.querySelector(".data-destroy");
let boxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", createBoxes);

function createBoxes(numb) {
  for (let i = 0, size = 30; i < numb; i += 1, size += 10) {
    let color = getRandomHexColor();
    let box = `<div style ="width: ${numb}px; hight: ${numb}px; background-color: ${color};"> </div>`;
    return box;
  }
  elements.conteiner.append(...box);
}
