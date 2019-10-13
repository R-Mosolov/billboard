import './modules/form-activation.mjs';
import { validateTitle } from './modules/validation/2-validate-title.mjs';
import { validatePrice } from './modules/validation/3-validate-price.mjs';
import { createRecommendations } from './modules/validation/4-create-recommendations.mjs';

const submit = document.querySelector('.form__submit');

submit.addEventListener('click', function (event) {
    event.preventDefault();

    validateTitle();
    validatePrice();
    createRecommendations();
});