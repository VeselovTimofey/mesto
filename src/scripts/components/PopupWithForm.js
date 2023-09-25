import {Popup} from './popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, callbackSubmitForm) {
        super(popupSelector);
        this._callbackSubmitForm = callbackSubmitForm;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputList = this._popupForm.querySelectorAll('.popup__input');
    }

    close() {
        super.close();
        this._popupForm.reset();
    }

    _getInputValues() {
        const _inputValues = {};
        this._inputList.forEach(input => {
            _inputValues[input.name] = input.value;
        })
        return _inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callbackSubmitForm(this._getInputValues());
        })
    }
}