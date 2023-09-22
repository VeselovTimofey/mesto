import {Popup} from './popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._picturePopup = this._popup.querySelector('.popup__image');
        this._descriptionPopup = this._popup.querySelector('.popup__description');
    }

    open(src, alt) {
        this._picturePopup.src = src;
        this._picturePopup.alt = alt;
        this._descriptionPopup.textContent = alt;
        super.open();
    }
}