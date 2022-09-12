const inputArea = document.getElementById("name-input");
const outputArea = document.getElementById("name-output");

function makeText(text) {
  outputArea.textContent = text.target.value;
}

const res = inputArea.addEventListener("input", makeText);
console.log(outputArea.textContent.length);

function blurFoo (){
if(outputArea.textContent === ''){
  outputArea.textContent = 'Anonymous'}
}

inputArea.addEventListener('blur', blurFoo)

