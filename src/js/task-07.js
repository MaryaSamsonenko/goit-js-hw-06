// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputEl = document.querySelector('#font-size-control');
const spanTextEl = document.querySelector('#text');

console.log(inputEl.min);

inputEl.addEventListener('input', onChangeValueInput);
function onChangeValueInput(event) {
    const inputValue = event.currentTarget.value;
    spanTextEl.style.fontSize = `${inputValue}px`;
}
