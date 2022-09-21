function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const createBoxEl = document.querySelector("button[data-create]");
const destroyBoxEl = document.querySelector("button[data-destroy]");
const divEl = document.getElementById("boxes");

function createBoxes(amount) {
  let createdDiv = [];
  

  for (let i = 0; i < amount; i += 1) {
    createdDiv.push("<div></div>");
  }
  divEl.insertAdjacentHTML("afterbegin", createdDiv.join(""));
  const boxesChildren = [...divEl.children];
  const step = 10;
  let divSize = 30;
  boxesChildren.map((item) => {
    item.style.backgroundColor = getRandomHexColor();
    item.style.width = divSize + "px";
    item.style.height = divSize + "px";
    divSize += step;
  });
}

function addDiv() {
  const amount = Number(inputEl.value);
  createBoxes(amount);
}

createBoxEl.addEventListener("click", addDiv);

function destroyEl() {
  divEl.innerHTML = "";
  inputEl.value = "";
}

destroyBoxEl.addEventListener("click", destroyEl);
