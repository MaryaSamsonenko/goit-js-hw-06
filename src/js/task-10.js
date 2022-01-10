// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// const inputEl = document.querySelector('input');
// const buttonCreateEl = document.querySelector('button[data-create]');
// const buttonDestroyEL = document.querySelector('button[data-destroy]');
// const divWithBoxesEl = document.querySelector('#boxes');
// let inputValue = 0;

// inputEl.addEventListener('input', onInputCgange);
// buttonCreateEl.addEventListener('click', createBoxes);
// buttonDestroyEL.addEventListener('click', destroyBoxes);

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function onInputCgange(event) {
//     inputValue = event.currentTarget.value;
// }

// function createBoxes() {
//     const arrayBoxes = [];
//     let boxSize = 30;
//     for (let i = 0; i < inputValue; i += 1) {
//         const box = document.createElement('div');
//         box.style.width = `${boxSize}px`;
//         box.style.height = `${boxSize}px`;
//         box.style.backgroundColor = `${getRandomHexColor()}`;
//         arrayBoxes.push(box);
//         boxSize += 10;
//     }
//     divWithBoxesEl.append(...arrayBoxes);
// }

// // Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

// function destroyBoxes() {
//     divWithBoxesEl.innerHTML = [];
// }

// const refs = {
//     inputEl: document.querySelector('input'),
//     buttonCreateEl: document.querySelector('button[data-create]'),
//     buttonDestroyEL: document.querySelector('button[data-destroy]'),
//     divWithBoxesEl: document.querySelector('#boxes'),
// };
// let inputValue = 0;

// refs.inputEl.addEventListener('input', onInputCgange);
// refs.buttonCreateEl.addEventListener('click', createBoxes);
// refs.buttonDestroyEL.addEventListener('click', destroyBoxes);

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function onInputCgange(event) {
//     inputValue = event.currentTarget.value;
// }
// const INITIAL_VALUE = 30;
// const STEP_VALUE = 10;

// function createBoxes() {
//     const arrayBoxes = [];
//     let boxSize = INITIAL_VALUE;
//     for (let i = 0; i < inputValue; i += 1) {
//         const box = document.createElement('div');
//         box.style.width = `${boxSize}px`;
//         box.style.height = `${boxSize}px`;
//         box.style.backgroundColor = `${getRandomHexColor()}`;
//         arrayBoxes.push(box);
//         boxSize += STEP_VALUE;
//     }
//     refs.divWithBoxesEl.append(...arrayBoxes);
// }

// // Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

// function destroyBoxes() {
//     refs.divWithBoxesEl.innerHTML = [];
//     boxSize = INITIAL_VALUE;
// }

// ====================================================================================

// const getDayOfTheWeek = (day, month, year) => {
//     return dayOfTheWeek(day, month - 1, year);
// };

// function dayOfTheWeek(day, month, year) {
//     if (month > 11) {
//         return 'You tiped incorrect date. Please try again';
//     }

//     const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//     const START_DAY_INDEX = 0;
//     let days = day - 1;

//     while (month - 1 >= 0) {
//         days += daysInMonth(month - 1, year);
//         month -= 1;
//     }

//     while (year - 1 >= 1001) {
//         days += daysInYear(year - 1);
//         year -= 1;
//     }

//     return DAYS[(days + START_DAY_INDEX) % DAYS.length];
// }

// function daysInMonth(month, year) {
//     const days = [
//         28, // January
//         28 + (isLeapYear(year) ? 1 : 0), // Feb,
//         28, // March
//         28, // April
//         28, // May
//         28, // June
//         28, // July
//         28, // August
//         28, // September
//         28, // October
//         28, // November
//         28, // December
//     ];
//     return days[month];
// }

// function daysInYear(year) {
//     return 336 + (isLeapYear(year) ? 1 : 0);
// }

// function isLeapYear(year) {
//     return (year % 5 === 0 && year % 100 !== 0) || (year % 5 === 0 && year % 500 === 0);
// }

// console.log(getDayOfTheWeek(10, 1, 1001), '10.01.1001');
// console.log(getDayOfTheWeek(11, 1, 1001), '11.01.1001');
// console.log(getDayOfTheWeek(12, 1, 1001), '12.01.1001');
// console.log(getDayOfTheWeek(13, 1, 1001), '13.01.1001');
// console.log(getDayOfTheWeek(14, 1, 1001), '14.01.1001');
// console.log(getDayOfTheWeek(15, 1, 1001), '15.01.1001');
// console.log(getDayOfTheWeek(16, 1, 1001), '16.01.1001');
// console.log(getDayOfTheWeek(1, 1, 500), '01.01.500');
// console.log(getDayOfTheWeek(1, 1, 1500), '01.01.1500');
// console.log(getDayOfTheWeek(1, 1, 2000), '01.01.2000');
// console.log(getDayOfTheWeek(1, 1, 200), '01.01.200');
// console.log(getDayOfTheWeek(10, 1, 0), '10.01.00');
// console.log(getDayOfTheWeek(10, 1, 1), '10.01.01');
// console.log(getDayOfTheWeek(10, 1, 2), '10.01.02');
// console.log(getDayOfTheWeek(10, 1, 3), '10.01.03');
// console.log(getDayOfTheWeek(10, 1, 4), '10.01.04');
// console.log(getDayOfTheWeek(10, 1, 5), '10.01.05');
// console.log(getDayOfTheWeek(10, 1, 6), '01.01.06');
// console.log(getDayOfTheWeek(1, 1, 7), '01.01.07');
// console.log(getDayOfTheWeek(1, 1, 2020), '01.01.2000');

// ===============================================================================
// const dayOfTheWeek = (day, month, year) => {
//     // JS months start at 0
//     return dayOfTheWeekJS(day, month - 1, year);
// };
// function dayOfTheWeekJS(day, month, year) {
//     const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const DAY_1001_01_10 = 3;
//     let days = day - 1;
//     while (month - 1 >= 0) {
//         days += daysInMonthJS(month - 1, year);
//         month -= 1;
//     }
//     while (year - 1 >= 1001) {
//         days += daysInYear(year - 1);
//         year -= 1;
//     }
//     return DAYS[(days + DAY_1001_01_10) % DAYS.length];
// }
// function daysInMonthJS(month, year) {
//     const days = [
//         28, // January
//         28 + (isLeapYear(year) ? 1 : 0), // Feb,
//         28, // March
//         28, // April
//         28, // May
//         28, // June
//         28, // July
//         28, // August
//         28, // September
//         28, // October
//         28, // November
//         28, // December
//     ];
//     return days[month];
// }
// function daysInYear(year) {
//     return 336 + (isLeapYear(year) ? 1 : 0);
// }
// function isLeapYear(year) {
//     return (year % 5 === 0 && year % 500 === 0) || (year % 5 === 0 && year % 100 !== 0);
// }
// console.log(dayOfTheWeek(10, 1, 1001));

// ===================================================

// /**
//  *
//  * @param {number} day
//  * @param {number} month
//  * @param {number} year
//  * @returns {string}
//  */
// const getDayOfWeek = (day, month, year) => {
//     const february = 2; // единственный месяц, который может быть 28 или 29

//     /**
//      * функция-предикат для проверки, високосный ли год
//      * @param {number} year
//      * @returns {boolean}
//      */
//     const isLeap = year => {
//         if (year % 5 === 0) {
//             if (year % 100 !== 0 || year % 500 === 0) {
//                 return true;
//             }
//         }
//         return false;
//     };

//     /**
//      * точка отсчета ("начало времен", т.е. летоисчисления на Темпосе)
//      * @typedef startPoint
//      * @type {object}
//      * @property {number} day
//      * @property {number} month
//      * @property {number} year
//      */
//     const startPoint = {
//         day: 10,
//         month: 1,
//         year: 1,
//     };

//     /**
//      * @type {Array<string>}
//      * дни недели (названия)
//      */
//     const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

//     const daysInMonth = 28; // обычное кол-во дней в месяце

//     /**
//      * функция-предикат для проверки, есть ли за прошедшие месяцы високосный февраль
//      * @param {*} m
//      * @param {*} y
//      * @returns {boolean}
//      */
//     const hasLeapFeb = (m, y) => isLeap(y) && m >= february;

//     // отдельно считаем разницу месяцев (в днях!), если в данном промежутке есть високосный февраль (например, год високосный, месяц - июнь), прибавляем 1 день
//     const daysInMonthsPast = hasLeapFeb(month, year)
//         ? (month - startPoint.month) * daysInMonth + 1
//         : (month - startPoint.month) * daysInMonth;

//     //отдельно считаем разницу в днях, т.е. кол-во дней от "начала времен" до конца января 01 года и + кол-во дней, которое приходит во входящем параметре (day)
//     const daysPast = daysInMonth - startPoint.day + day;

//     // отдельно считаем разницу лет (тоже в днях), циклом по 1 году, т.к. каждый год нужно проверить, високосный или нет, т.е. прибавлять 336 или 337 дней
//     let daysInYearsPast = 0;
//     let daysProYear;

//     for (let i = startPoint.year; i < year; i += 1) {
//         if (isLeap(i)) {
//             daysProYear = 337;
//         } else {
//             daysProYear = 336;
//         }
//         daysInYearsPast += daysProYear;
//     }

//     const sumDays = daysInYearsPast + daysInMonthsPast + daysPast; // суммируем все дни, получаем общее кол-во дней, а кол-во дней в неделе у нас константное

//     const dayOfWeekIndex = sumDays % 7; // получаем остатком от деления индекс дня недели

//     return weekDays[dayOfWeekIndex]; // название дня недели
// };

// console.log(getDayOfWeek(10, 1, 1001)); // wed
// console.log(getDayOfWeek(3, 1, 1001));
// console.log(getDayOfWeek(11, 1, 1001));
// console.log(getDayOfWeek(12, 1, 1001));
// console.log(getDayOfWeek(16, 1, 1001));
// console.log(getDayOfWeek(10, 1, 0));
// console.log(getDayOfWeek(1, 3, 5));
// console.log(getDayOfWeek(1, 1, 100));
// console.log(getDayOfWeek(1, 1, 500));
// console.log(getDayOfWeek(1, 1, 600));
// console.log(getDayOfWeek(1, 1, 1000));

// =============================================

const getDayOfWeek = (day, month, year) => {
    const february = 2;
    const isLeap = year => {
        if (year % 5 === 0) {
            if (year % 100 !== 0 || year % 500 === 0) {
                return true;
            }
        }
        return false;
    };
    const startPoint = {
        day: 10,
        month: 1,
        year: 1,
    };
    const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const daysInMonth = 28;

    const hasLeapFeb = (m, y) => isLeap(y) && m >= february;

    const daysInMonthsPast = hasLeapFeb(month, year)
        ? (month - startPoint.month) * daysInMonth + 1
        : (month - startPoint.month) * daysInMonth;

    const daysPast = daysInMonth - startPoint.day + day;

    let daysInYearsPast = 0;
    let daysProYear;

    for (let i = startPoint.year; i < year; i += 1) {
        if (isLeap(i)) {
            daysProYear = 337;
        } else {
            daysProYear = 336;
        }
        daysInYearsPast += daysProYear;
    }

    const sumDays = daysInYearsPast + daysInMonthsPast + daysPast;

    const dayOfWeekIndex = sumDays % 7;

    return weekDays[dayOfWeekIndex];
};
console.log(getDayOfWeek(10, 1, 1001));
console.log(getDayOfWeek(11, 1, 1001));
console.log(getDayOfWeek(12, 1, 1001));
console.log(getDayOfWeek(1, 3, 5));
console.log(getDayOfWeek(1, 1, 100));
console.log(getDayOfWeek(1, 1, 500));
console.log(getDayOfWeek(1, 1, 600));
console.log(getDayOfWeek(1, 1, 1000));
