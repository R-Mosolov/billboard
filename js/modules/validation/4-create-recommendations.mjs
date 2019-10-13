import { requirementsList } from './3-validate-price.mjs';

let requirementsField = document.createElement('p');
requirementsField.setAttribute('class', 'requirementsField');
const submitForm = document.querySelector('.form__element--submit');
submitForm.appendChild(requirementsField);

function createRecommendations() {
    if (requirementsList.length > 0) {
        document.querySelector('.requirementsField').innerHTML = requirementsList;
        requirementsList = [];
    }
}

export { createRecommendations };