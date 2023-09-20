export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if(evt.key === 'Escape') {
            const openedPopup = document.querySelector(this._popupSelector)
            this.close(openedPopup);
        }
    }

    setEventListeners() {
        this._popup = document.querySelector(this._popupSelector);
        this._buttonClosePopup = this._element.querySelector('.popup__close-icon');
        this._buttonClosePopup.addEventListener('click', () => {
            this.close();
        })
        this._popup.addEventListener('click', (evt) => {
            if (evt.target === this._popup) {
                this.close();
            }
        })
    }
}