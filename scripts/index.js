import {Card} from './card.js';
import {FormValidator} from './FormValidator.js';

const profile = document.querySelector('.profile');
const nameProfile = profile.querySelector('.profile__name');
const jobProfile = profile.querySelector('.profile__profession');
const buttonOpenPopupProfile = profile.querySelector('.profile__edit-button');
const buttonOpenPopupAddNewCard = profile.querySelector('.profile__add-button');

const popupProfile = document.querySelector('.popup_type_profile');
const buttonClosePopupProfile = popupProfile.querySelector('.popup__close-icon');
<<<<<<< HEAD
const formPopupProfile = popupProfile.querySelector('.popup__form');
const inputNamePopupProfile = popupProfile.querySelector('.popup__input_value_name');
const inputJobPopupProfile = popupProfile.querySelector('.popup__input_value_profession');
const buttonSavePopupProfile = popupProfile.querySelector('.popup__button');
=======
const inputNamePopupProfile = popupProfile.querySelector('.popup__input_value_name');
const inputJobPopupProfile = popupProfile.querySelector('.popup__input_value_profession');
>>>>>>> develop

const popupAddNewCard = document.querySelector('.popup_type_add-card');
const buttonClosePopupAddNewCard = popupAddNewCard.querySelector('.popup__close-icon');
const formPopupAddNewCard = popupAddNewCard.querySelector('.popup__form');
const inputPlacePopupAddNewCard = popupAddNewCard.querySelector('.popup__input_value_place');
const inputImagePopupAddNewCard = popupAddNewCard.querySelector('.popup__input_value_image');
<<<<<<< HEAD
const buttonSavePopupAddNewCard = popupAddNewCard.querySelector('.popup__button');

const cards = document.querySelector('.elements');
const newCard = document.querySelector('#element').content;
=======

const cards = document.querySelector('.elements');
>>>>>>> develop

const popupFullImage = document.querySelector('.popup_type_picture');
const picturePopupFullImage = popupFullImage.querySelector('.popup__image');
const buttonClosePopupFullImage = popupFullImage.querySelector('.popup__close-icon');
const descriptionPopupFullImage = popupFullImage.querySelector('.popup__description');

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
<<<<<<< HEAD
    hideInputError(formPopupProfile, inputNamePopupProfile, config);
    hideInputError(formPopupProfile, inputJobPopupProfile, config);
    toggleButtonState([inputNamePopupProfile, inputJobPopupProfile], buttonSavePopupProfile, config);
=======
    const profileFormValidator = new FormValidator(config, popupProfile);
    profileFormValidator.enableValidation();
>>>>>>> develop
    openPopup(popupProfile);
};

function openPopupAddNewCard() {
    formPopupAddNewCard.reset();
<<<<<<< HEAD
    hideInputError(formPopupAddNewCard, inputPlacePopupAddNewCard, config);
    hideInputError(formPopupAddNewCard, inputImagePopupAddNewCard, config);
    toggleButtonState([inputPlacePopupAddNewCard, inputImagePopupAddNewCard], buttonSavePopupAddNewCard, config);
=======
    const newCardFormValidator = new FormValidator(config, popupAddNewCard);
    newCardFormValidator.enableValidation();
>>>>>>> develop
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
    cards.prepend(InitializationNewCard(newElement));
    closePopup(popupAddNewCard);
};

function InitializationNewCard(initialElement) {
<<<<<<< HEAD
    const newElement = newCard.querySelector('.element').cloneNode(true);
    const imageNewElement = newElement.querySelector('.element__image');
    imageNewElement.src = initialElement['link'];
    imageNewElement.alt = initialElement['name'];
    newElement.querySelector('.element__name').textContent = initialElement['name'];
    newElement.querySelector('.element__like').addEventListener('click', (evt) => {
        evt.target.classList.toggle('element__like_active');
    });
    newElement.querySelector('.element__delete').addEventListener('click', () => {
        newElement.remove();
    });
    imageNewElement.addEventListener('click', () => {
        openPopupFullImage(initialElement['link'], initialElement['name'])
    });
    return newElement;
=======
    const card = new Card(initialElement, '#element');
    const cardElement = card.generateCard();
    cardElement.querySelector('.element__image').addEventListener('click', () => {
        openPopupFullImage(initialElement['link'], initialElement['name'])
    });
    return cardElement;
>>>>>>> develop
};

function initializationFirstElements() {
    for (const initialElement of initialElements) {
<<<<<<< HEAD
        const newElement = InitializationNewCard(initialElement);
        cards.append(newElement);
=======
        cards.append(InitializationNewCard(initialElement));
>>>>>>> develop
    };
};

initializationFirstElements();
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
