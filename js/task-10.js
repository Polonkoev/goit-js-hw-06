function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const createBoxEl = document.querySelector("button[data-create]");
const destroyBoxEl = document.querySelector("button[data-destroy]");
const divEl = document.getElementById("boxes");

function createBoxes(amount) {
  let divSize = 20;

  for (let i = 0; i < amount; i += 1) {
    divSize += 10;

    const divBoxes = document.getElementById("boxes");
    const createdDiv = document.createElement("div");
    createdDiv.style.width = `${divSize}px`;
    createdDiv.style.height = `${divSize}px`;

    createdDiv.style.backgroundColor = getRandomHexColor();
    divBoxes.append(createdDiv);
  }
}
let inputVal = 0;
function createInputVal(num) {
  inputVal = num.target.value;
}

function destroyEl() {
  divEl.innerHTML = "";
  inputEl.value = '';
  inputVal = 0;
}
inputEl.addEventListener("input", createInputVal);

function createItem() {
  createBoxes(inputVal);
}

//  createBoxEl.addEventListener('click', () => createBoxes(inputVal));

//  destroyBoxEl.addEventListener('click', ()=> destroyEl())

createBoxEl.addEventListener("click", createItem);

destroyBoxEl.addEventListener("click", destroyEl);
