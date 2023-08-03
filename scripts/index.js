const profile = document.querySelector('.profile');
const nameProfile = profile.querySelector('.profile__name');
const jobProfile = profile.querySelector('.profile__profession');
const openPopup = profile.querySelector('.profile__edit-button');
const openPopupElement = profile.querySelector('.profile__add-button');

const popup = document.querySelector('.popup_type_profile');
const closePopup = popup.querySelector('.popup__close-icon');
const nameInput = popup.querySelector('.popup__input_value_name');
const jobInput = popup.querySelector('.popup__input_value_profession');
const savePopup = popup.querySelector('.popup__button');

const popupElement = document.querySelector('.popup_type_add-card');
const closePopupElement = popupElement.querySelector('.popup__close-icon');
const formPopupElement = popupElement.querySelector('.popup__form');
const placeInput = popupElement.querySelector('.popup__input_value_place');
const imageInput = popupElement.querySelector('.popup__input_value_image');
const savePopupElement = popupElement.querySelector('.popup__button');

const elements = document.querySelector('.elements');
const element = document.querySelector('#element').content;

const popupImage = document.querySelector('.popup_type_picture');
const picturePopupImage = popupImage.querySelector('.popup__image');
const closePopupImage = popupImage.querySelector('.popup__close-icon');
const descriptionPopupImage = popupImage.querySelector('.popup__description');

function openingPopup(popup) {
    popup.classList.add('popup_opened');
};

function openingPopupProfile() {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    openingPopup(popup);
};

function closingPopup(popup) {
    popup.classList.remove('popup_opened');
};

function openingPopupElement() {
    formPopupElement.reset();
    openingPopup(popupElement);
};

function handleFormSubmit(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closingPopup(popup);
};

function openingPopupImage(pictureNewElement, descriptionNewElement) {
    picturePopupImage.src = pictureNewElement;
    descriptionPopupImage.textContent = descriptionNewElement;
    openingPopup(popupImage);
};

function elementInitialization(initialElement) {
    const newElement = element.querySelector('.element').cloneNode(true);
    const imageNewElement = newElement.querySelector('.element__image');
    imageNewElement.src = initialElement['link'];
    newElement.querySelector('.element__name').textContent = initialElement['name'];
    newElement.querySelector('.element__like').addEventListener('click', (evt) => {
        evt.target.classList.toggle('element__like_active');
    });
    newElement.querySelector('.element__delete').addEventListener('click', () => {
        newElement.remove();
    });
    imageNewElement.addEventListener('click', () => {
        openingPopupImage(initialElement['link'], initialElement['name'])
    });
    return newElement;
};

function elementFormSubmit(evt) {
    evt.preventDefault();
    const newElement = {name: placeInput.value, link: imageInput.value};
    elements.prepend(elementInitialization(newElement));
    closingPopup(popupElement);
};

function firstElementsInitialization() {
    for (const initialElement of initialElements) {
        const newElement = elementInitialization(initialElement);
        elements.append(newElement);
    };
};

firstElementsInitialization();
openPopupElement.addEventListener('click', openingPopupElement);
closePopupElement.addEventListener('click', () => {
    closingPopup(popupElement);
});
popupElement.addEventListener('submit', elementFormSubmit);

openPopup.addEventListener('click', openingPopupProfile);
closePopup.addEventListener('click', () => {
    closingPopup(popup);
});
popup.addEventListener('submit', handleFormSubmit);

closePopupImage.addEventListener('click', () => {
    closingPopup(popupImage);
});