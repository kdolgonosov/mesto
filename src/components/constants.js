const showPopUpEditBtn = document.querySelector('.profile__edit-button')
const showPopUpAddBtn = document.querySelector('.profile__add-button')
const showPopUpChgAvt = document.querySelector('.profile__avatar-wrapper')

const inputName = document.querySelector('.pop-up__input_type_name')
const inputProfession = document.querySelector('.pop-up__input_type_profession')
const inputAvatar = document.querySelector('.pop-up__input_type_avatar')

const editForm = document.querySelector('.editForm')
const addForm = document.querySelector('.addForm')
const changeAvatarForm = document.querySelector('.changeAvatarForm')

const cardListSelector = '.elements'
const popupEditSelector = '.pop-up_type_edit'
const popupAddSelector = '.pop-up_type_add'
const popupPictureSelector = '.pop-up_type_picture'
const popupConfirmSelector = '.pop-up_type_confirm'
const popupChangeAvatarSelector = '.pop-up_type_changeAvatar'

const profileSelectors = {
  name: '.profile__info-item-name',
  profession: '.profile__info-item-profession',
  profileAvatarSelector: '.profile__avatar'
}

const config = {
  formSelector: '.pop-up__form',
  inputSelector: '.pop-up__input',
  submitButtonSelector: '.pop-up__submit-btn',
  inactiveButtonClass: 'pop-up__submit-btn_disabled',
  inputErrorClass: 'pop-up__input_type_error',
  errorClass: 'pop-up__error_visible'
}

export {showPopUpEditBtn, showPopUpAddBtn, showPopUpChgAvt, inputName, inputProfession, inputAvatar, editForm, addForm, changeAvatarForm,
  cardListSelector, popupEditSelector, popupAddSelector, popupPictureSelector, popupConfirmSelector, popupChangeAvatarSelector, profileSelectors, config}
