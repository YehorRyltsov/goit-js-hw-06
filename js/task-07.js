const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

inputRef.addEventListener("input", spanRengeRef);
function spanRengeRef(event) {
  spanRef.style.fontSize = `${+event.currentTarget.value}px`;
}
