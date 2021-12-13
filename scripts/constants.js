const popUpEdit = document.querySelector('.pop-up_type_edit')
const popUpAdd = document.querySelector('.pop-up_type_add')
const popUpPicture = document.querySelector('.pop-up_type_picture')

const showPopUpEditBtn = document.querySelector('.profile__edit-button')
const showPopUpAddBtn = document.querySelector('.profile__add-button')

const hidePopUpEditBtn = document.querySelector('.pop-up-edit-close-btn')
const hidePopUpAddBtn = document.querySelector('.pop-up-add-close-btn')
const hidePopUpPictureBtn = document.querySelector('.pop-up-picture-close-btn')

const inputName = document.querySelector('.pop-up__input_type_name')
const inputProfession = document.querySelector('.pop-up__input_type_profession')
const inputTitle = document.querySelector('.pop-up__input_type_title')
const inputUrl = document.querySelector('.pop-up__input_type_url')
const itemName = document.querySelector('.profile__info-item-name')
const itemProfession = document.querySelector('.profile__info-item-profession')

const editForm = document.querySelector('.editForm')
const addForm = document.querySelector('.addForm')

const elementsContainer = document.querySelector('.elements')

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

export {popUpEdit, popUpAdd, popUpPicture, showPopUpEditBtn, showPopUpAddBtn, hidePopUpEditBtn, hidePopUpAddBtn, hidePopUpPictureBtn, 
  inputName, inputProfession, inputTitle, inputUrl, itemName, itemProfession, editForm, addForm, elementsContainer, initialCards, config}
