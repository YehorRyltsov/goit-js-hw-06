let items = document.querySelectorAll(".item");
console.log("Number of categories:", items.length);
for (let name of items) {
  let categorie = name.querySelector("h2");
  console.log("Category:", categorie.textContent);
  let subCategorie = name.querySelectorAll("li");
  console.log("Elements:", subCategorie.length);
}
