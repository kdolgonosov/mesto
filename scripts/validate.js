const config = {
  formSelector: '.pop-up__form',
  inputSelector: '.pop-up__input',
  submitButtonSelector: '.pop-up__submit-btn',
  inactiveButtonClass: 'pop-up__submit-btn_disabled',
  inputErrorClass: 'pop-up__input_type_error',
  errorClass: 'pop-up__error_visible'
}

const enableValidation = function({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) {
  const forms = Array.from(document.querySelectorAll(formSelector))
  forms.forEach(form => {
    setEventListeners(form, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass)
  })
}

const getErrorSpan = (input) => {
  const inputName = input.getAttribute('name')
  return errorSpan = document.getElementById(`${inputName}-error`)
}

const showError = (input, errorClass) => {
  getErrorSpan(input)
  errorSpan.textContent = input.validationMessage
  errorSpan.classList.add(errorClass)
}
const hideError = (input, errorClass) => {
  getErrorSpan(input)
  errorSpan.classList.remove(errorClass)
  errorSpan.textContent = ''
}

const hasInvalidInput = (inputs) => {
  return inputs.some((input) => {
    return !input.validity.valid;
  })
}

const toggleButtonState = (inputs, submitButton, inactiveButtonClass) => {
  if(hasInvalidInput(inputs)) {
    submitButton.classList.add(inactiveButtonClass)
    submitButton.setAttribute('disabled', 1)
  } else {
    submitButton.classList.remove(inactiveButtonClass)
    submitButton.removeAttribute('disabled', 1)
  }
}

const checkInputValidity = (input, inputErrorClass, errorClass) => {
  if (input.validity.valid) {
    hideError(input, errorClass)
    input.classList.remove(inputErrorClass)
  } else {
      showError(input, errorClass)
      input.classList.add(inputErrorClass)
  }
}
const setEventListeners = (form, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
  const inputs = Array.from(form.querySelectorAll(inputSelector))
  const submitButton = form.querySelector(submitButtonSelector)
  inputs.forEach(input => {
    input.addEventListener('input', e => {
      checkInputValidity(input, inputErrorClass, errorClass)
      toggleButtonState(inputs, submitButton, inactiveButtonClass)
    })
  })
  toggleButtonState(inputs, submitButton, inactiveButtonClass)
}

enableValidation(config);
