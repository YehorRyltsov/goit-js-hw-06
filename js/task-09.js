function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorButton = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");
const bodyEl = document.querySelector("body");
colorValue.textContent = "#ffffff";
changeColorButton.addEventListener("click", onChangeColorButton);
function onChangeColorButton(event) {
  event.preventDefault();
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorValue.innerHTML = bodyEl.style.backgroundColor;
}