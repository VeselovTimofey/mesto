export class Card {
    constructor(data, templateSelector) {
        this._image = data.link;
        this._name = data.name;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);

        return cardElement;
    }

    _setEventListeners() {
        this._newCard.querySelector('.element__like').addEventListener('click', (evt) => {
            evt.target.classList.toggle('element__like_active');
        });
        this._newCard.querySelector('.element__delete').addEventListener('click', () => {
            this._newCard.remove();
        });
    }

    generateCard() {
        this._newCard = this._getTemplate();
        this._setEventListeners();
        this._imageNewCard = this._newCard.querySelector('.element__image');
        this._imageNewCard.src = this._image;
        this._imageNewCard.alt = this._name;
        this._newCard.querySelector('.element__name').textContent = this._name;
        return this._newCard;
    }
}