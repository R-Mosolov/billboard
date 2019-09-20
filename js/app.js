const submit = document.querySelector('.form__submit');

submit.addEventListener('click', function (event) {
    event.preventDefault();

    validateTitle();
    validatePrice();
});

function validateTitle() {
    const lengthTitleValue = document.querySelector('#title').value.length;

    if (lengthTitleValue === 0) {
        alert('Пожалуйста, заполните поле: Заголовок объявления');
    }

    if (lengthTitleValue !== 0 && lengthTitleValue < 30) {
        alert('Минимальная длина поля "Заголовок объявления": 30 символов');
    }

    if (lengthTitleValue > 100) {
        alert('Максимальная длина поля "Заголовок объявления": 100 символов');
    }
}

function validatePrice() {
    const lengthPriceValue = document.querySelector('#price').value.length;
    const typeValue = document.querySelector('#type').value;
    const priceValue = document.querySelector('#price').value;
    const minPrice = [0, 1000, 5000, 10000];

    if (lengthPriceValue === 0) {
        alert('Пожалуйста, заполните поле: Цена за ночь, руб.');
    }

    const getMinPrice = (type, index) => {
        if (typeValue === `${type}`) {
            document.querySelector('#price').placeholder = minPrice[index];
            alert(`Цена должна быть не меньше ${minPrice[index]} руб.`);
        }
    };

    getMinPrice('bungalo', 0);
    getMinPrice('flat', 1);
    getMinPrice('house', 2);
    getMinPrice('palace', 3);

    if (parseInt(priceValue, 10) > 1000000) {
        alert('Цена не должна быть больше 1000000 руб.');
    }
}