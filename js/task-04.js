let counterValue = 0;
let buttons = document.querySelectorAll("button");
let index = [0, 1];
index.map((b) => {
  buttons[b].addEventListener("click", (event) => {
    let action = event.target.getAttribute("data-action");
    if (action === "decrement") {
      counterValue -= 1;
    } else {
      counterValue += 1;
    }
    document.querySelector("#value").textContent = counterValue;
  });
});
