function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body')
const buttonEl = document.querySelector('.change-color')

buttonEl.addEventListener('click', changeColor)

function changeColor(){
  bodyEl.style.backgroundColor = getRandomHexColor();
  console.log("Код цвета: " + getRandomHexColor());
}

// buttonEl.addEventListener('click',  () => {
//   bodyEl.style.backgroundColor = getRandomHexColor()
// })
