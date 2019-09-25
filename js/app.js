// Global Variables
const submit = document.querySelector('.form__submit');
let requirements = [];

// Form Activation
const formActivation = document.querySelector('.map__pin');
formActivation.addEventListener('click', function () {
    const form = document.querySelector('.notice__form');
    form.classList.remove('notice__form--disabled');
});

// Form Validation
submit.addEventListener('click', function (event) {
    event.preventDefault();

    validateTitle();
    validatePrice();
});

// Additional Functions for Form Validation
function validateTitle() {
    const lengthTitleValue = document.querySelector('#title').value.length;

    if (lengthTitleValue === 0) {
        requirements.push('Пожалуйста, заполните поле: Заголовок объявления');
    }

    if (lengthTitleValue !== 0 && lengthTitleValue < 30) {
        requirements.push('Минимальная длина поля "Заголовок объявления": 30 символов');
    }

    if (lengthTitleValue > 100) {
        requirements.push('Максимальная длина поля "Заголовок объявления": 100 символов');
    }
}

function validatePrice() {
    const lengthPriceValue = document.querySelector('#price').value.length;
    const typeValue = document.querySelector('#type').value;
    const priceValue = document.querySelector('#price').value;
    const minPrice = [0, 1000, 5000, 10000];

    if (lengthPriceValue === 0) {
        requirements.push(' Пожалуйста, заполните поле: Цена за ночь, руб.');
    }

    const getMinPrice = (type, index) => {
        if (typeValue === `${type}`) {
            document.querySelector('#price').placeholder = minPrice[index];
            requirements.push(` Цена должна быть не меньше ${minPrice[index]} руб.`);
        }
    };

    getMinPrice('bungalo', 0);
    getMinPrice('flat', 1);
    getMinPrice('house', 2);
    getMinPrice('palace', 3);

    if (parseInt(priceValue, 10) > 1000000) {
        requirements.push(' Цена не должна быть больше 1000000 руб.');
    }
}