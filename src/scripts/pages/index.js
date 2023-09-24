import '../../pages/index.css';

import {PopupWithImage} from '../components/PopupWithImage.js'
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {Card} from '../components/card.js';
import {Section} from '../components/section.js';
import {FormValidator} from '../components/FormValidator.js';
import {config} from '../utils/config.js';
import {Api} from '../components/api.js';

import {
    popupProfile,
    buttonOpenPopupProfile,
    inputNamePopupProfile,
    inputJobPopupProfile,
    buttonOpenPopupAddNewCard,
    popupAddNewCard,
} from '../utils/constants.js';

const api = new Api();
const promiseUserInfo = api.getUserInfo();

const popupWithImage = new PopupWithImage('.popup_type_picture');
popupWithImage.setEventListeners();

const userInfo = new UserInfo({
    nameSelector: '.profile__name',
    jobSelector: '.profile__profession',
    imageSelector: '.profile__avatar'
}, api.getUserInfo);

userInfo.setUserInfo();
const popupNewUserInfo = new PopupWithForm('.popup_type_profile', (newUserInfo) => {
    const promiseUserInfo = api.patchUserInfo(newUserInfo);
    promiseUserInfo.then(newUserInfo => userInfo.updateUserInfo(newUserInfo));
});
const profileFormValidator = new FormValidator(config, popupProfile);
profileFormValidator.enableValidation();
popupNewUserInfo.setEventListeners();

const newCardFormValidator = new FormValidator(config, popupAddNewCard);
newCardFormValidator.enableValidation();

const cardsList = new Section({
    callbackPromiseItems: api.getFirstCards,
    renderer: (item) => {
        const card = new Card(
            item,
            '#element',
            (link = item.link, name = item.name) => {
                popupWithImage.open(link, name);
            }
        )
        const newCard = card.generateCard();
        cardsList.addItem(newCard);
    }
}, '.elements');

const popupNewCard = new PopupWithForm('.popup_type_add-card', (newCardData) => {cardsList.renderItem(newCardData)});
popupNewCard.setEventListeners();

buttonOpenPopupProfile.addEventListener('click', () => {
    const userInfoList = userInfo.getUserInfo();
    inputNamePopupProfile.value = userInfoList.name;
    inputJobPopupProfile.value = userInfoList.job;
    profileFormValidator.resetValidationState();
    popupNewUserInfo.open();
});

buttonOpenPopupAddNewCard.addEventListener('click', () => {
    popupNewCard.open();
    newCardFormValidator.resetValidationState();
})

cardsList.renderItems();