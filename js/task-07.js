const inputEl = document.getElementById("font-size-control");
const txtSize = document.getElementById('text')

function changeFontSize(val){
    txtSize.style.fontSize = `${val.target.value}px`;
    // txtSize.style.color = `#${val.target.value}0000`;
}
inputEl.addEventListener('input', changeFontSize)


// inputEl.addEventListener('input', (event) => {
//     txtSize.style.fontSize = `${event.target.value}px`;
//     txtSize.style.color = `#${event.target.value}0000`;
    
// })