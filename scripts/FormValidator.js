export default class FormValidator {
  constructor(config, form) {
    this._formSelector = config.formSelector
    this._inputSelector = config.inputSelector
    this._submitButtonSelector = config.submitButtonSelector
    this._inactiveButtonClass = config.inactiveButtonClass
    this._inputErrorClass = config.inputErrorClass
    this._errorClass = config.errorClass
    this._form = form
    this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector))
    this._submitButton = this._form.querySelector(this._submitButtonSelector)
  }

  _getErrorSpan(input) {
    const inputName = input.getAttribute('name')
    const errorSpan = this._form.querySelector(`#${inputName}-error`)
    return errorSpan
  }

  _showError(input) {
    const errorSpan = this._getErrorSpan(input)
    errorSpan.textContent = input.validationMessage
    errorSpan.classList.add(this._errorClass)
    input.classList.add(this._inputErrorClass)
  }

  _hideError(input) {
    const errorSpan = this._getErrorSpan(input)
    errorSpan.classList.remove(this._errorClass)
    errorSpan.textContent = ''
    input.classList.remove(this._inputErrorClass)
  }

  _hasInvalidInput() {
    return this._inputs.some((input) => {
      return !input.validity.valid;
    })
  }
  
  _toggleButtonState() {
    if(this._hasInvalidInput()) {
      this._submitButton.classList.add(this._inactiveButtonClass)
      this._submitButton.setAttribute('disabled', 1)
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass)
      this._submitButton.removeAttribute('disabled', 1)
    }
  }
  
  _checkInputValidity(input) {
    if (input.validity.valid) {
      this._hideError(input)      
    } else {
        this._showError(input)
    }
  }

  _setEventListeners() { 
    this._inputs.forEach(input => {
      input.addEventListener('input', e => {
        this._checkInputValidity(input)
        this._toggleButtonState()
      })
    })
    this._toggleButtonState()
  }

  resetValidation() {
    this._toggleButtonState()
    this._inputs.forEach((input) => {
      this._hideError(input)
    })
  }

  enableValidation() {
    this._setEventListeners()    
  }
}