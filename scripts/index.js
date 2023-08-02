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

const popupImage = document.querySelector('#popup-image').content;

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

function openingImage (evt) {
    let openImage = popupImage.querySelector('.popup').cloneNode(true);
    openImage.querySelector('.popup__image').src = evt.target.src;
    openImage.querySelector('.popup__description').textContent = evt.target.parentElement.querySelector('.element__name').textContent;
    openImage.querySelector('.popup__close-icon').addEventListener('click', (evt) => {
        evt.target.parentElement.parentElement.classList.remove('popup_opened');
        setTimeout(() => {evt.target.parentElement.parentElement.remove()}, 500);
    });
    popupElement.after(openImage);
    setTimeout(() => {openImage.classList.add('popup_opened')}, 5);
};

function elementInitialization (initialElement) {
    let newElement = element.querySelector('.element').cloneNode(true);
    newElement.querySelector('.element__image').src = initialElement['link'];
    newElement.querySelector('.element__name').textContent = initialElement['name'];
    newElement.querySelector('.element__like').addEventListener('click', (evt) => {
        evt.target.classList.toggle('element__like_active');
    });
    newElement.querySelector('.element__delete').addEventListener('click', (evt) => {
        evt.target.parentElement.remove();
    });
    newElement.querySelector('.element__image').addEventListener('click', openingImage);
    return newElement;
};

function elementFormSubmit(evt) {
    evt.preventDefault();
    const newElement = {name: placeInput.value, link: imageInput.value};
    elements.prepend(elementInitialization(newElement));
    closingPopup(popupElement);
};

function firstElementsInitialization () {
    for (let initialElement of initialElements) {
        let newElement = elementInitialization(initialElement);
        elements.append(newElement);
    };
};

firstElementsInitialization();
openPopupElement.addEventListener('click', () => {
    openingPopup(placeInput, imageInput, popupElement);
});
closePopupElement.addEventListener('click', () => {
    closingPopup(popupElement);
});
popupElement.addEventListener('submit', elementFormSubmit);

openPopup.addEventListener('click', () => {
    openingPopup(nameInput, jobInput, popup, nameProfile.textContent, jobProfile.textContent);
});
closePopup.addEventListener('click', () => {
    closingPopup(popup);
});
popup.addEventListener('submit', handleFormSubmit);