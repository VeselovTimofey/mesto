export class Card {
    constructor(data, templateSelector, handleCardClick, idUser, callbackDeletePopup) {
        this._image = data.link;
        this._name = data.name;
        this._likes = data.likes.length;
        this._idCard = data._id;
        this._idOwner = data.owner._id;
        this._templateSelector = templateSelector;
        this._openPopupFullImage = handleCardClick;
        this._idUser = idUser;
        this._openDeletePopup = callbackDeletePopup;
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);

        return cardElement;
    }

    _likeCard(evt) {
        evt.target.classList.toggle('element__like_active');
    }

    _setEventListeners() {
        this._newCard.querySelector('.element__like').addEventListener('click', (evt) => {this._likeCard(evt)});
        this._imageNewCard.addEventListener('click', () => {this._openPopupFullImage(this._image, this._name)});
    }

    generateCard() {
        this._newCard = this._getTemplate();
        this._newCard.id = this._idCard;
        const deleteButton = this._newCard.querySelector('.element__delete');
        if (this._idUser === this._idOwner) {
            deleteButton.addEventListener('click', () => {
                this._openDeletePopup(this._idCard);
            });
        } else {
            deleteButton.remove();
        }
        this._imageNewCard = this._newCard.querySelector('.element__image');
        this._imageNewCard.src = this._image;
        this._imageNewCard.alt = this._name;
        this._newCard.querySelector('.element__name').textContent = this._name;
        this._newCard.querySelector('.element__like-number').textContent = this._likes;
        this._setEventListeners();
        return this._newCard;
    }
}