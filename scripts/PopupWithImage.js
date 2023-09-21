import {Popup} from './popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(src, alt) {
        this._picturePopup = this._popup.querySelector('.popup__image');
        this._descriptionPopup = this._popup.querySelector('.popup__description');
        this._picturePopup.src = src;
        this._picturePopup.alt = alt;
        this._descriptionPopup.textContent = alt;
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', super._handleEscClose);
    }
}