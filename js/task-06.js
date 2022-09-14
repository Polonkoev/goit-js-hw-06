const inputArea = document.getElementById("validation-input");

function outPutText(text) {
  let inputText = text.target.value.length;

  inputText === 6
    ? (inputArea.classList = "valid")
    : (inputArea.classList = "invalid");
}
inputArea.addEventListener("blur", outPutText);
