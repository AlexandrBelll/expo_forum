'use strict'
const toggleForm = () => {
    let toggleButton = document.querySelector('.header-search__button');
    let formInput = document.querySelector('.header-search__input');

    toggleButton.onclick = function () {
        toggleButton.classList.toggle('open');
        formInput.classList.toggle('open');
    }
}
toggleForm();