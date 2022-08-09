function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let buttons = document.querySelectorAll("button");
let index = [0, 1];
let boxes = document.querySelector("#boxes");

let numb = document.querySelector("input");

index.map((b) => {
  buttons[b].addEventListener("click", (event) => {
    let action = event.target.hasAttribute("data-create");
    if (action) {
      createBoxes();
    } else {
      deleteBoxes();
    }
  });
});
function createBoxes() {
  if (numb.value === "") {
    return;
  }
  let boxs = [];
  for (let i = 0, size = 30; i < numb.value; i += 1, size += 10) {
    let color = getRandomHexColor();
    let box = `<div style ="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    boxs.push(box);
  }
  boxs = boxs.join("");
  boxes.insertAdjacentHTML("beforeend", boxs);
}
function deleteBoxes() {
  // boxes.textContent = "";
  let allBox = boxes.querySelectorAll("div");
  for (let i = 0; i < allBox.length; i += 1) {
    allBox[i].remove();
  }
}
