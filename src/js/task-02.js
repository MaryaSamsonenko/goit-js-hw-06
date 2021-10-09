// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JavaScript есть массив строк.

// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// const liEl = document.createElement('li');
// liEl.textContent = 'Potatoes';

const ingredientsEl = document.querySelector('#ingredients');

const arrayItemsEl = ingredients.map(ingredient => {
    const item = document.createElement('li');
    item.classList.add('item');
    item.textContent = `${ingredient}`;
    return item;
});

ingredientsEl.append(...arrayItemsEl);

console.log(arrayItemsEl);
