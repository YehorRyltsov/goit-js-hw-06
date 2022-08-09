const input = document.querySelector("#validation-input");
input.addEventListener("blur", onInputBlur);

function onInputBlur() {
  let dataset = Number(input.dataset.length);
  if (input.value.length === dataset) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
