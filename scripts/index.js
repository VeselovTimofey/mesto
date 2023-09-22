import {PopupWithImage} from './PopupWithImage.js'
import {PopupWithForm} from './PopupWithForm.js';
import {UserInfo} from './UserInfo.js';
import {Card} from './card.js';
import {Section} from './section.js';
import {FormValidator} from './FormValidator.js';
import {initialElements} from './cards.js';
import {config} from './config.js';

const popupProfile = document.querySelector('.popup_type_profile');
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const inputNamePopupProfile = document.querySelector('.popup__input_value_name');
const inputJobPopupProfile = document.querySelector('.popup__input_value_profession');
const buttonOpenPopupAddNewCard = document.querySelector('.profile__add-button');
const popupAddNewCard = document.querySelector('.popup_type_add-card');
const formPopupAddNewCard = popupAddNewCard.querySelector('.popup__form');

const popupWithImage = new PopupWithImage('.popup_type_picture');

const userInfo = new UserInfo({nameSelector: '.profile__name', jobSelector: '.profile__profession'});
const popupNewUserInfo = new PopupWithForm('.popup_type_profile', userInfo.setUserInfo.bind(userInfo));
const profileFormValidator = new FormValidator(config, popupProfile);
profileFormValidator.enableValidation();
popupNewUserInfo.setEventListeners();

const popupNewCard = new PopupWithForm('.popup_type_add-card', (newCardData) => {
    const newCard = new Section({
        items: newCardData,
        renderer: (item) => {
            const card = new Card(
                item,
                '#element',
                (link = item.link, name = item.name) => {
                    popupWithImage.open(link, name);
                    popupWithImage.setEventListeners();
                }
            )
            const generatedCard = card.generateCard();
            newCard.addItem(generatedCard);
        }
    }, '.elements');
    newCard.renderItem();
});
popupNewCard.setEventListeners();

const newCardFormValidator = new FormValidator(config, popupAddNewCard);
newCardFormValidator.enableValidation();

const firstCards = new Section({
    items: initialElements,
    renderer: (item) => {
        const card = new Card(
            item,
            '#element',
            (link = item.link, name = item.name) => {
                popupWithImage.open(link, name);
                popupWithImage.setEventListeners();
            }
        )
        const newCard = card.generateCard();
        firstCards.addItem(newCard);
    }
}, '.elements');

buttonOpenPopupProfile.addEventListener('click', () => {
    const userInfoList = userInfo.getUserInfo();
    inputNamePopupProfile.value = userInfoList.name;
    inputJobPopupProfile.value = userInfoList.job;
    profileFormValidator.resetValidationState();
    popupNewUserInfo.open();
});

buttonOpenPopupAddNewCard.addEventListener('click', () => {
    formPopupAddNewCard.reset();
    popupNewCard.open();
    //newCardFormValidator.resetValidationState();
})

firstCards.renderItems();