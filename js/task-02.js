const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let elem = ingredients.map((ingredient) => {
  let li = document.createElement("li");
  li.textContent = ingredient;
  li.className = "item";
  return li;
});
const dom = document.querySelector("#ingredients");
dom.append(...elem);
