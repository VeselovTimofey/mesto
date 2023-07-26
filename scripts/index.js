let profile = document.querySelector('#profile');
let nameProfile = profile.querySelector('.profile__name');
let jobProfile = profile.querySelector('.profile__profession');
let openPopup = profile.querySelector('.profile__edit-button');

let popup = document.querySelector('#edit-form');
let closePopup = popup.querySelector('.edit-form__close-icon');
let nameInput = popup.querySelector('.edit-form__name');
let jobInput = popup.querySelector('.edit-form__profession');
let savePopup = popup.querySelector('.edit-form__button');

function openingPopup() {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    popup.classList.add('edit-form_opened');
}

function closingPopup() {
    popup.classList.remove('edit-form_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closingPopup();
}

openPopup.addEventListener('click', openingPopup);
closePopup.addEventListener('click', closingPopup);
popup.addEventListener('submit', handleFormSubmit);