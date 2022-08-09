const input = document.querySelector("#name-input");
const spamAnonymous = document.querySelector("#name-output");

input.addEventListener("input", inputChange);

function inputChange(event) {
  console.log(event.currentTarget.value);
  if (input.value === "") {
    return (spamAnonymous.textContent = "Anonymous");
  } else spamAnonymous.textContent = event.currentTarget.value;
}
