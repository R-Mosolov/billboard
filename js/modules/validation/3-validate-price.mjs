import { requirementsList } from './2-validate-title.mjs';
import { illuminateField } from './1-illuminate-field.mjs';

function validatePrice() {
    const _lengthPriceValue = document.querySelector('#price').value.length;
    const _typeValue = document.querySelector('#type').value;
    const _priceValue = document.querySelector('#price').value;
    const _minPrice = [0, 1000, 5000, 10000];

    if (_lengthPriceValue === 0) {
        requirementsList.push('Пожалуйста, заполните поле: Цена за ночь, руб.<br>');
        illuminateField('#price');
    }

    else {
        const _getMinPrice = (type, index) => {
            if (_typeValue === `${type}`) {
                document.querySelector('#price').placeholder = _minPrice[index];

                if (_priceValue < _minPrice[index]) {
                    requirementsList.push(`Цена должна быть не меньше ${_minPrice[index]} руб.<br>`);
                    illuminateField('#price');
                }
            }
        };

        _getMinPrice('bungalo', 0);
        _getMinPrice('flat', 1);
        _getMinPrice('house', 2);
        _getMinPrice('palace', 3);

        if (parseInt(_priceValue, 10) > 1000000) {
            requirementsList.push('Цена не должна быть больше 1000000 руб.<br>');
            illuminateField('#price');
        }
    }
}

export { validatePrice, requirementsList };