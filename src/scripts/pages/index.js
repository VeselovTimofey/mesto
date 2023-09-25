import '../../pages/index.css';

import {PopupDeleteCard} from '../components/PopupDeleteCard';
import {PopupWithImage} from '../components/PopupWithImage.js'
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {Card} from '../components/card.js';
import {Section} from '../components/section.js';
import {FormValidator} from '../components/FormValidator.js';
import {config} from '../utils/config.js';
import {Api} from '../components/api.js';
import {renderLoading} from '../utils/renderLoading';

import {
    popupProfile,
    buttonOpenPopupProfile,
    inputNamePopupProfile,
    inputJobPopupProfile,
    buttonOpenPopupAddNewCard,
    popupAddNewCard,
    buttonOpenPopupChangeAvatar,
    popupAvatar,
    submitChangeProfile,
    submitChangeAvatar,
    submitAddNewCard
} from '../utils/constants.js';

const api = new Api();
const promiseUserInfo = api.getUserInfo();
let userId = '';
promiseUserInfo.then((userInfo) => {userId = userInfo._id});

const popupWithImage = new PopupWithImage('.popup_type_picture');
popupWithImage.setEventListeners();

const userInfo = new UserInfo({
    nameSelector: '.profile__name',
    jobSelector: '.profile__profession',
    imageSelector: '.profile__avatar'
}, promiseUserInfo);
userInfo.setUserInfo();
const profileFormValidator = new FormValidator(config, popupProfile);
profileFormValidator.enableValidation();

const popupNewUserInfo = new PopupWithForm('.popup_type_profile', (newUserInfo) => {
    renderLoading(true, submitChangeProfile);
    api.patchUserInfo(newUserInfo)
        .then(jsonNewUserInfo => userInfo.updateUserInfo(jsonNewUserInfo))
        .finally(() => {renderLoading(false, submitChangeProfile)});
});
popupNewUserInfo.setEventListeners();

const popupChangeAvatar = new PopupWithForm('.popup_type_change-avatar', (newAvatar) => {
    renderLoading(true, submitChangeAvatar);
    api.changeAvatar(newAvatar)
        .then(jsonNewAvatar => userInfo.updateUserInfo(jsonNewAvatar))
        .finally(() => {renderLoading(false, submitChangeAvatar)});
});

const changeAvatarValidator = new FormValidator(config, popupAvatar);
changeAvatarValidator.enableValidation();
popupChangeAvatar.setEventListeners();

const popupDeleteCard = new PopupDeleteCard('.popup_type_delete-card', (idCard) => {
    api.deleteCard(idCard);
    document.getElementById(idCard).remove();
});
popupDeleteCard.setEventListeners();

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
            },
            userId,
            (cardId) => {popupDeleteCard.open(cardId)},
            (idCard) => api.putLike(idCard),
            (idCard) => api.deleteLike(idCard)
        )
        const newCard = card.generateCard();
        cardsList.addItem(newCard);
    }
}, '.elements');

const popupNewCard = new PopupWithForm(
    '.popup_type_add-card',
    (newCardData) => {
        renderLoading(true, submitAddNewCard);
        api.postNewCard(newCardData)
            .then(jsonNewCardData => cardsList.renderItem(jsonNewCardData))
            .finally(() => {renderLoading(false, submitAddNewCard, 'Создать')})
    }
);
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

buttonOpenPopupChangeAvatar.addEventListener('click', () => {
    popupChangeAvatar.open();
})

cardsList.renderItems();