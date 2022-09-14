function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input')
const createBoxEl = document.querySelector('button[data-create]')
const destroyBoxEl = document.querySelector('button[data-destroy]')
const divBoxes = document.getElementById('boxes')
const createDiv = divBoxes.createElement('div')
divBoxes.append(createDiv)
// inputEl.addEventListener('input',  )

function createBoxes(amount){
  createDiv * amount
}

createBoxes(2)
