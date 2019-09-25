// Global Variables
const submit = document.querySelector('.form__submit');
const requirementsField = document.createElement('p');
let requirementsList = '';

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
    createRecommendations();
});

// Additional Functions for Form Validation
function validateTitle() {
    const lengthTitleValue = document.querySelector('#title').value.length;

    if (lengthTitleValue === 0) {
        requirementsList += 'Пожалуйста, заполните поле: Заголовок объявления<br>';
    }

    if (lengthTitleValue !== 0 && lengthTitleValue < 30) {
        requirementsList += 'Минимальная длина поля "Заголовок объявления": 30 символов<br>';
    }

    if (lengthTitleValue > 100) {
        requirementsList += 'Максимальная длина поля "Заголовок объявления": 100 символов<br>';
    }
}

function validatePrice() {
    const lengthPriceValue = document.querySelector('#price').value.length;
    const typeValue = document.querySelector('#type').value;
    const priceValue = document.querySelector('#price').value;
    const minPrice = [0, 1000, 5000, 10000];

    if (lengthPriceValue === 0) {
        requirementsList += 'Пожалуйста, заполните поле: Цена за ночь, руб.<br>';
    }

    else {
        const getMinPrice = (type, index) => {
            if (typeValue === `${type}`) {
                document.querySelector('#price').placeholder = minPrice[index];

                if (priceValue < minPrice[index]) {
                    requirementsList += `Цена должна быть не меньше ${minPrice[index]} руб.<br>`;
                }
            }
        };

        getMinPrice('bungalo', 0);
        getMinPrice('flat', 1);
        getMinPrice('house', 2);
        getMinPrice('palace', 3);

        if (parseInt(priceValue, 10) > 1000000) {
            requirementsList += 'Цена не должна быть больше 1000000 руб.<br>';
        }
    }
}

function createRecommendations() {
    if (requirementsList.length > 0) {
        const submitForm = document.querySelector('.form__element--submit');

        requirementsField.innerHTML = requirementsList;
        submitForm.appendChild(requirementsField);

        requirementsList = '';
    }
}