export class FormValidator {
    constructor(data, formElement) {
        this._formSelector = formElement;
        this._inputList = Array.from(this._formSelector.querySelectorAll(data.inputSelector));
        this._submitButtonElement = this._formSelector.querySelector(data.submitButtonSelector);
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._spanErrorSelector = data.spanErrorSelector;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
    }

    _showInputError(_inputElement) {
        const errorElement = this._formSelector.querySelector(this._spanErrorSelector + _inputElement.name);
        _inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = _inputElement.validationMessage;
        errorElement.classList.add(this._errorClass);
    }
    
    _hideInputError(_inputElement) {
        const errorElement = this._formSelector.querySelector(this._spanErrorSelector + _inputElement.name);
        _inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    }

    _checkInputValidity(_inputElement) {
        if (!_inputElement.validity.valid) {
            this._showInputError(_inputElement)
        } else {
            this._hideInputError(_inputElement)
        }
    }

    _hasInvalidInput() {
        return this._inputList.some((_inputElement) => {
            return !_inputElement.validity.valid;
        })
    }
    
    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._submitButtonElement.classList.add(this._inactiveButtonClass);
            this._submitButtonElement.disabled = true;
        } else {
            this._submitButtonElement.classList.remove(this._inactiveButtonClass);
            this._submitButtonElement.disabled = false;
        };
    }

    _setEventListeners() {
        this._toggleButtonState();
        this._inputList.forEach((_inputElement) => {
            _inputElement.addEventListener('input', () => {
                this._checkInputValidity(_inputElement);
                this._toggleButtonState();
        })
    })
    }

    resetValidationState() {
        this._inputList.forEach((_inputElement) => {
            this._hideInputError(_inputElement)
        })
        this._toggleButtonState();
    }

    enableValidation() {
        this._setEventListeners();
        this.resetValidationState();
    }
}