import { requirementsList } from './3-validate-price.mjs';

const submitForm = document.querySelector('.form__element--submit');
const requirementsField = document.createElement('p');
submitForm.appendChild(requirementsField);

function createRecommendations() {
    if (requirementsList.length > 0) {
        requirementsField.innerHTML = requirementsList;
    }
}

export { createRecommendations };