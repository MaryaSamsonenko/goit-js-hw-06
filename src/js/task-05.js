// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputEl = document.querySelector('#name-input');
const nameInTitleEl = document.querySelector('#name-output');
inputEl.addEventListener('input', event => {
    nameInTitleEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value.trim() === '') {
        nameInTitleEl.textContent = 'Anonymous';
    }
});

//============= Options 2 ======================

// const inputEl = document.querySelector('#name-input');
// const spanEl = document.querySelector('#name-output');
// inputEl.addEventListener('input', getInputValue);
// function getInputValue({ target: { value } }) {
//     spanEl.textContent = value.trim() ? value : 'Anonimous';
// }
