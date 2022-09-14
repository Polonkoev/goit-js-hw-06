const inputEl = document.getElementById("font-size-control");
const spanEl = document.getElementById("text");
spanEl.classList = "text-size";
const bodyEl = document.querySelector("body");
const txtSize = `<style>#text.text-size{
    font-size: 26px;
    color: red;
}</style>`;
bodyEl.insertAdjacentHTML("afterbegin", txtSize);
