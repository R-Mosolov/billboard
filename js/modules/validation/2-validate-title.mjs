import { requirementsList } from '../../global-var/requirements-list.mjs';
import { illuminateField } from './1-illuminate-field.mjs';

function validateTitle() {
    const _lengthTitleValue = document.querySelector('#title').value.length;

    if (_lengthTitleValue === 0) {
        requirementsList.push('Пожалуйста, заполните поле: Заголовок объявления<br>');
        illuminateField('#title');
    }

    if (_lengthTitleValue !== 0 && _lengthTitleValue < 30) {
        requirementsList.push('Минимальная длина поля "Заголовок объявления": 30 символов<br>');
        illuminateField('#title');
    }

    if (_lengthTitleValue > 100) {
        requirementsList.push('Максимальная длина поля "Заголовок объявления": 100 символов<br>');
        illuminateField('#title');
    }
}

export { validateTitle, requirementsList };