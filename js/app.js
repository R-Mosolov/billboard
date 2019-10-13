import './modules/form-activation.mjs';
import { illuminateField } from './modules/illuminate-field.mjs';

// Global Variables
const submit = document.querySelector('.form__submit');
let requirementsList = '';

// Form Activation
// Exported formActivation()

// Form Validation
submit.addEventListener('click', function (event) {
    event.preventDefault();

    validateTitle();
    validatePrice();
    createRecommendations();
});

// Additional Functions for Form Validation
// Exported illuminateField()

function validateTitle() {
    const lengthTitleValue = document.querySelector('#title').value.length;

    if (lengthTitleValue === 0) {
        requirementsList += 'Пожалуйста, заполните поле: Заголовок объявления<br>';
        illuminateField('#title');
    }

    if (lengthTitleValue !== 0 && lengthTitleValue < 30) {
        requirementsList += 'Минимальная длина поля "Заголовок объявления": 30 символов<br>';
        illuminateField('#title');
    }

    if (lengthTitleValue > 100) {
        requirementsList += 'Максимальная длина поля "Заголовок объявления": 100 символов<br>';
        illuminateField('#title');
    }
}

function validatePrice() {
    const lengthPriceValue = document.querySelector('#price').value.length;
    const typeValue = document.querySelector('#type').value;
    const priceValue = document.querySelector('#price').value;
    const minPrice = [0, 1000, 5000, 10000];

    if (lengthPriceValue === 0) {
        requirementsList += 'Пожалуйста, заполните поле: Цена за ночь, руб.<br>';
        illuminateField('#price');
    }

    else {
        const getMinPrice = (type, index) => {
            if (typeValue === `${type}`) {
                document.querySelector('#price').placeholder = minPrice[index];

                if (priceValue < minPrice[index]) {
                    requirementsList += `Цена должна быть не меньше ${minPrice[index]} руб.<br>`;
                    illuminateField('#price');
                }
            }
        };

        getMinPrice('bungalo', 0);
        getMinPrice('flat', 1);
        getMinPrice('house', 2);
        getMinPrice('palace', 3);

        if (parseInt(priceValue, 10) > 1000000) {
            requirementsList += 'Цена не должна быть больше 1000000 руб.<br>';
            illuminateField('#price');
        }
    }
}

function createRecommendations() {
    const _requirementsField = document.createElement('p');

    if (requirementsList.length > 0) {
        const submitForm = document.querySelector('.form__element--submit');

        _requirementsField.innerHTML = requirementsList;
        submitForm.appendChild(_requirementsField);

        requirementsList = '';
    }
}