let profile = document.querySelector('#profile');
let nameProfile = profile.querySelector('.profile__name');
let jobProfile = profile.querySelector('.profile__profession');
let openPopup = profile.querySelector('.profile__edit-button');

let popup = document.querySelector('#popup');
let closePopup = popup.querySelector('.popup__close-icon');
let nameInput = popup.querySelector('.popup__name');
let jobInput = popup.querySelector('.popup__profession');
let savePopup = popup.querySelector('.popup__button');

function openingPopup() {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    popup.classList.add('popup_opened');
}

function closingPopup() {
    popup.classList.remove('popup_opened');
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