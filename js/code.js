const submit = $('.form__submit');

const minPrice = [0, 1000, 5000, 10000];


$('.form__reset').on('click', function () {
    $('input').value = '';
});


submit.on('click', function (event) {
    event.preventDefault();

    if (document.querySelector('#title').value.length === 0) {
        alert('Пожалуйста, заполните поле: Заголовок объявления');
    }

    if (document.querySelector('#title').value.length !== 0
        && document.querySelector('#title').value.length < 30) {
        alert('Минимальная длина поля "Заголовок объявления": 30 символов');
    }

    if (document.querySelector('#title').value.length > 100) {
        alert('Максимальная длина поля "Заголовок объявления": 100 символов');
    }
});


submit.on('click', function (event) {
    event.preventDefault();

    if (document.querySelector('#price').value.length === 0) {
        alert('Пожалуйста, заполните поле: Цена за ночь, руб.');
    }

    const getMinPrice = (type, index) => {
        if (document.querySelector('#type').value === `${type}`) {
            document.querySelector('#price').placeholder = minPrice[index];
            alert(`Цена должна быть не меньше ${minPrice[index]} руб.`);
        }
    };

    getMinPrice('bungalo', 0);
    getMinPrice('flat', 1);
    getMinPrice('house', 2);
    getMinPrice('palace', 3);

    if (parseInt(document.querySelector('#price').value, 10) > 1000000) {
        alert('Цена не должна быть больше 1000000 руб.');
    }
});