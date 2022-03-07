const showPopUpEditBtn = document.querySelector('.profile__edit-button')
const showPopUpAddBtn = document.querySelector('.profile__add-button')

const inputName = document.querySelector('.pop-up__input_type_name')
const inputProfession = document.querySelector('.pop-up__input_type_profession')

const editForm = document.querySelector('.editForm')
const addForm = document.querySelector('.addForm')

const cardListSelector = '.elements'
const popupEditSelector = '.pop-up_type_edit'
const popupAddSelector = '.pop-up_type_add'
const popupPictureSelector = '.pop-up_type_picture'
const profileSelectors = {
  name: '.profile__info-item-name',
  proffesion: '.profile__info-item-profession'
}

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const config = {
  formSelector: '.pop-up__form',
  inputSelector: '.pop-up__input',
  submitButtonSelector: '.pop-up__submit-btn',
  inactiveButtonClass: 'pop-up__submit-btn_disabled',
  inputErrorClass: 'pop-up__input_type_error',
  errorClass: 'pop-up__error_visible'
}

export {showPopUpEditBtn, showPopUpAddBtn, inputName, inputProfession, editForm, addForm, initialCards,
  cardListSelector, popupEditSelector, popupAddSelector, popupPictureSelector, profileSelectors, config}
