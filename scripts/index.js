const profile = document.querySelector('#profile');
const nameProfile = profile.querySelector('.profile__name');
const jobProfile = profile.querySelector('.profile__profession');
const openPopup = profile.querySelector('.profile__edit-button');

const popup = document.querySelector('#popup');
const closePopup = popup.querySelector('.popup__close-icon');
const nameInput = popup.querySelector('.popup__input_value_name');
const jobInput = popup.querySelector('.popup__input_value_profession');
const savePopup = popup.querySelector('.popup__button');

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

function openingPopup() {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    popup.classList.add('popup_opened');
};

function closingPopup() {
    popup.classList.remove('popup_opened');
};

function handleFormSubmit(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closingPopup();
};

function firstElementsInitialization () {
    for (let initialElement of initialElements) {
        newElement = element.querySelector('.element').cloneNode(true);
        newElement.querySelector('.element__image').src = initialElement['link'];
        newElement.querySelector('.element__name').textContent = initialElement['name'];
        elements.append(newElement);
    };
};

firstElementsInitialization();
openPopup.addEventListener('click', openingPopup);
closePopup.addEventListener('click', closingPopup);
popup.addEventListener('submit', handleFormSubmit);