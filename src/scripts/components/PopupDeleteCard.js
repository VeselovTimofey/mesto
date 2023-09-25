import {Popup} from './popup.js';

export class PopupDeleteCard extends Popup {
    constructor(popupSelector, callbackDeleteCard) {
        super(popupSelector);
        this._buttonDelete = this._popup.querySelector('.popup__button');
        this._callbackDeleteCard = callbackDeleteCard;
    }

    open(idCard) {
        this._buttonDelete.addEventListener('click', () => {
            this._callbackDeleteCard(idCard);
        }, { once: true });
        super.open();
    }

    setDeleteEventListener() {
        this._buttonDelete.addEventListener('keydown', () => {
            this._popup.classList.remove('popup_opened');
            document.removeEventListener('keydown', this._handleEscClose);
        })
    }
} 