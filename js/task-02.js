const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.getElementById("ingredients");

// for (const ingredient of ingredients) {
//   let element = document.createElement("li");
//   element.className = "item";
//   element.innerHTML = ingredient;
//   listEl.append(element);
// }

// const createLi = ingredients.map((elem) => {
//   const liElement = document.createElement("li");
//   liElement.textContent = elem;
//   liElement.classList = "item";
//   return liElement;
// });

// listEl.append(...createLi);

ingredients.map((elem) => {
  let element = document.createElement("li");
  element.className = "item";
  element.innerHTML = elem;
  ul.append(element);
});
