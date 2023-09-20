import {Card} from './card.js';
import {FormValidator} from './FormValidator.js';
import {initialElements} from './cards.js';
import {config} from './config.js';

export const profile = document.querySelector('.profile');
export const nameProfile = profile.querySelector('.profile__name');
export const jobProfile = profile.querySelector('.profile__profession');
const buttonOpenPopupProfile = profile.querySelector('.profile__edit-button');
const buttonOpenPopupAddNewCard = profile.querySelector('.profile__add-button');

const popupProfile = document.querySelector('.popup_type_profile');
const buttonClosePopupProfile = popupProfile.querySelector('.popup__close-icon');
const inputNamePopupProfile = popupProfile.querySelector('.popup__input_value_name');
const inputJobPopupProfile = popupProfile.querySelector('.popup__input_value_profession');

const popupAddNewCard = document.querySelector('.popup_type_add-card');
const buttonClosePopupAddNewCard = popupAddNewCard.querySelector('.popup__close-icon');
const formPopupAddNewCard = popupAddNewCard.querySelector('.popup__form');
const inputPlacePopupAddNewCard = popupAddNewCard.querySelector('.popup__input_value_place');
const inputImagePopupAddNewCard = popupAddNewCard.querySelector('.popup__input_value_image');

const cards = document.querySelector('.elements');

const popupFullImage = document.querySelector('.popup_type_picture');
const picturePopupFullImage = popupFullImage.querySelector('.popup__image');
const buttonClosePopupFullImage = popupFullImage.querySelector('.popup__close-icon');
const descriptionPopupFullImage = popupFullImage.querySelector('.popup__description');

const profileFormValidator = new FormValidator(config, popupProfile);
profileFormValidator.enableValidation();

const newCardFormValidator = new FormValidator(config, popupAddNewCard);
newCardFormValidator.enableValidation();

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupWithEscape);
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupWithEscape);
};

function closePopupWithEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    };
};

function openPopupProfile() {
    inputNamePopupProfile.value = nameProfile.textContent;
    inputJobPopupProfile.value = jobProfile.textContent;
    profileFormValidator.resetValidationState();
    openPopup(popupProfile);
};

function openPopupAddNewCard() {
    formPopupAddNewCard.reset();
    newCardFormValidator.resetValidationState();
    openPopup(popupAddNewCard);
};

function openPopupFullImage(pictureNewElement, descriptionNewElement) {
    picturePopupFullImage.src = pictureNewElement;
    picturePopupFullImage.alt = descriptionNewElement;
    descriptionPopupFullImage.textContent = descriptionNewElement;
    openPopup(popupFullImage);
};

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    nameProfile.textContent = inputNamePopupProfile.value;
    jobProfile.textContent = inputJobPopupProfile.value;
    closePopup(popupProfile);
};

function handleNewCardFormSubmit(evt) {
    evt.preventDefault();
    const newElement = {name: inputPlacePopupAddNewCard.value, link: inputImagePopupAddNewCard.value};
    cards.prepend(createNewCard(newElement));
    closePopup(popupAddNewCard);
};

function createNewCard(initialElement) {
    const card = new Card(initialElement, '#element', openPopupFullImage);
    const cardElement = card.generateCard();
    return cardElement;
};

function initializeFirstElements() {
    for (const initialElement of initialElements) {
        cards.append(createNewCard(initialElement));
    };
};

initializeFirstElements();
buttonOpenPopupAddNewCard.addEventListener('click', openPopupAddNewCard);
buttonClosePopupAddNewCard.addEventListener('click', () => {
    closePopup(popupAddNewCard);
});
popupAddNewCard.addEventListener('click', (evt) => {
    if (evt.target === popupAddNewCard) {
        closePopup(popupAddNewCard);
    };
});
popupAddNewCard.addEventListener('submit', handleNewCardFormSubmit);

buttonOpenPopupProfile.addEventListener('click', openPopupProfile);
buttonClosePopupProfile.addEventListener('click', () => {
    closePopup(popupProfile);
});
popupProfile.addEventListener('click', (evt) => {
    if (evt.target === popupProfile) {
        closePopup(popupProfile);
    };
});
popupProfile.addEventListener('submit', handleProfileFormSubmit);

buttonClosePopupFullImage.addEventListener('click', () => {
    closePopup(popupFullImage);
});

popupFullImage.addEventListener('click', (evt) => {
    if (evt.target === popupFullImage) {
        closePopup(popupFullImage);
    };
});
