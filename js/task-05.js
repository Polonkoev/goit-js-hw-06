const inputArea = document.getElementById("name-input");
const outputArea = document.getElementById("name-output");

function makeText(text) {
  outputArea.textContent = text.target.value;
}

inputArea.addEventListener("input", makeText);

function blurFoo() {
  if (outputArea.textContent === "") {
    outputArea.textContent = "Anonymous";
  }
}

inputArea.addEventListener("blur", blurFoo);
