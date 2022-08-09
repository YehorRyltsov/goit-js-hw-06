let counterValue = 0;
let buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", (event) => {
    let action = event.target.getAttribute("data-action");
    if (action === "decrement") {
      counterValue -= 1;
    } else {
      counterValue += 1;
    }
    document.querySelector("#value").textContent = counterValue;
  })
);
