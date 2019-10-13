const formActivation = document.querySelector('.map__pin');

formActivation.addEventListener('click', function () {
    const _form = document.querySelector('.notice__form');
    _form.classList.remove('notice__form--disabled');
});