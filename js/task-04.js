let counterValue = 0;
let buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener("click", (event) => {
    let action = event.target.getAttribute("data-action");
    if (action === "decrement") {
      counterValue -= 1;
    } else {
      counterValue += 1;
    }
    document.querySelector("#value").textContent = counterValue;
  });
}
