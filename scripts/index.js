const profile = document.querySelector('#profile');
const nameProfile = profile.querySelector('.profile__name');
const jobProfile = profile.querySelector('.profile__profession');
const openPopup = profile.querySelector('.profile__edit-button');
const openPopupElement = profile.querySelector('.profile__add-button');

const popup = document.querySelector('#popup');
const closePopup = popup.querySelector('.popup__close-icon');
const nameInput = popup.querySelector('.popup__input_value_name');
const jobInput = popup.querySelector('.popup__input_value_profession');
const savePopup = popup.querySelector('.popup__button');

const popupElement = document.querySelector('#popup-element');
const closePopupElement = popupElement.querySelector('.popup__close-icon');
const placeInput = popupElement.querySelector('.popup__input_value_place');
const imageInput = popupElement.querySelector('.popup__input_value_image');
const savePopupElement = popupElement.querySelector('.popup__button');

const elements = document.querySelector('#elements');
const element = document.querySelector('#element').content;
const initialElements = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function openingPopup(firstInput, secondInput, place, firstOutput = '', secondOutput = '') {
    firstInput.value = firstOutput;
    secondInput.value = secondOutput;
    place.classList.add('popup_opened');
};

function closingPopup(closeButton) {
    closeButton.classList.remove('popup_opened');
};

function handleFormSubmit(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closingPopup(popup);
};

function elementInitialization (initialElement) {
    let newElement = element.querySelector('.element').cloneNode(true);
    newElement.querySelector('.element__image').src = initialElement['link'];
    newElement.querySelector('.element__name').textContent = initialElement['name'];
    let likeButton = newElement.querySelector('.element__like');
    likeButton.id = initialElement.name.split(' ')[0];
    return newElement;
};

function initialLikeElement(idButton) {
    let newLikeButton = document.querySelector(`#${idButton}`);
    newLikeButton.addEventListener('click', () => {
        newLikeButton.classList.toggle('element__like_active');
    });
};

function elementFormSubmit(evt) {
    evt.preventDefault();
    const newElement = {name: placeInput.value, link: imageInput.value};
    elements.prepend(elementInitialization(newElement));
    initialLikeElement(newElement.name.split(' ')[0]);
    closingPopup(popupElement);
};

function firstElementsInitialization () {
    for (let initialElement of initialElements) {
        let newElement = elementInitialization(initialElement);
        elements.append(newElement);
        let likeButton = newElement.querySelector('.element__like');
        initialLikeElement(likeButton.id);
    };
};

firstElementsInitialization();
openPopupElement.addEventListener('click', function () {
    openingPopup(placeInput, imageInput, popupElement);
});
closePopupElement.addEventListener('click', function () {
    closingPopup(popupElement);
});
popupElement.addEventListener('submit', elementFormSubmit);

openPopup.addEventListener('click', function () {
    openingPopup(nameInput, jobInput, popup, nameProfile.textContent, jobProfile.textContent);
});
closePopup.addEventListener('click', function () {
    closingPopup(popup);
});
popup.addEventListener('submit', handleFormSubmit);