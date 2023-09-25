export class Card {
    constructor(data, templateSelector, handleCardClick, idUser, callbackDeletePopup, callbackAddLike, callbackDeleteLike) {
        this._image = data.link;
        this._name = data.name;
        this._likes = data.likes;
        this._idCard = data._id;
        this._idOwner = data.owner._id;
        this._templateSelector = templateSelector;
        this._openPopupFullImage = handleCardClick;
        this._idUser = idUser;
        this._openDeletePopup = callbackDeletePopup;
        this._addLike = callbackAddLike;
        this._deleteLike = callbackDeleteLike;
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
        if (this._likes.find(user => user._id === this._idUser)) {
            evt.target.classList.remove('element__like_active');
            this._numberOfLikes.textContent = parseInt(this._numberOfLikes.textContent) - 1;
            this._deleteLike(this._idCard)
                .then((newLikeList) => {this._likes = newLikeList.likes});
        } else {
            evt.target.classList.add('element__like_active');
            this._numberOfLikes.textContent = parseInt(this._numberOfLikes.textContent) + 1;
            this._addLike(this._idCard)
                .then((newLikeList) => {this._likes = newLikeList.likes});
        }
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', (evt) => {this._likeCard(evt)});
        this._imageNewCard.addEventListener('click', () => {this._openPopupFullImage(this._image, this._name)});
    }

    generateCard() {
        this._newCard = this._getTemplate();
        this._numberOfLikes = this._newCard.querySelector('.element__like-number');
        this._likeButton = this._newCard.querySelector('.element__like');
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
        this._numberOfLikes.textContent = this._likes.length;
        if (this._likes.find(user => user._id === this._idUser)) {this._likeButton.classList.add('element__like_active')};
        this._setEventListeners();
        return this._newCard;
    }
}