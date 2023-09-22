import {PopupWithImage} from '../components/PopupWithImage.js'
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {Card} from '../components/card.js';
import {Section} from '../components/section.js';
import {FormValidator} from '../components/FormValidator.js';
import {initialElements} from '../utils/cards.js';
import {config} from '../utils/config.js';

import {
    popupProfile,
    buttonOpenPopupProfile,
    inputNamePopupProfile,
    inputJobPopupProfile,
    buttonOpenPopupAddNewCard,
    popupAddNewCard,
    formPopupAddNewCard
} from '../utils/constants.js';

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
    newCardFormValidator.resetValidationState();
})

firstCards.renderItems();