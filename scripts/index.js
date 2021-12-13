import Card from './Card.js'
import FormValidator from './FormValidator.js'
import {popUpEdit, popUpAdd, popUpPicture, showPopUpEditBtn, showPopUpAddBtn, hidePopUpEditBtn, hidePopUpAddBtn, hidePopUpPictureBtn, 
        inputName, inputProfession, inputTitle, inputUrl, itemName, itemProfession, editForm, addForm, elementsContainer,
        initialCards, config} from './constants.js'


function initialLoad() {
  initialCards.forEach(e => {
    const card = new Card(e, '#elementsItem')
    const cardElement = card.createCard()
    elementsContainer.append(cardElement)
  })
}

const editFormValidation = new FormValidator(config, editForm)
editFormValidation.enableValidation()
const addFormValidation = new FormValidator(config, addForm)
addFormValidation.enableValidation()

function showPopUp (target) {
  target.classList.add('pop-up_shown')
  document.addEventListener('keydown', keyEscHandler)
  target.addEventListener('click', mouseHandler)
}

function hidePopUp (target) {
  target.classList.remove('pop-up_shown')
  document.removeEventListener('keydown', keyEscHandler)
  target.removeEventListener('click', mouseHandler)  
}

function editInfo(event) {
  event.preventDefault()
  itemName.textContent = `${inputName.value}`  
  itemProfession.textContent = `${inputProfession.value}`
  hidePopUp(popUpEdit)
}

function addElementsItem(event) {
  event.preventDefault()
  const inputData = []
  inputData.name = inputTitle.value
  inputData.link = inputUrl.value
  const newCard = new Card(inputData, '#elementsItem')
  const cardElement = newCard.createCard()
  elementsContainer.prepend(cardElement)
  hidePopUp(popUpAdd)
  addForm.reset()
}

const keyEscHandler = (evt) => {
  if(evt.key === 'Escape') {
    hidePopUp(document.querySelector('.pop-up_shown'))
  }
}

const mouseHandler = (evt) => {
  hidePopUp(evt.target)
}

initialLoad()

showPopUpEditBtn.addEventListener('click', () => {  
  inputName.value = itemName.textContent
  inputProfession.value = itemProfession.textContent
  editFormValidation.resetValidation()
  showPopUp(popUpEdit)
});

showPopUpAddBtn.addEventListener('click', () => {
  addForm.reset()
  addFormValidation.resetValidation()
  showPopUp(popUpAdd)
});

hidePopUpEditBtn.addEventListener('click', () => {
  hidePopUp(popUpEdit)
});

hidePopUpAddBtn.addEventListener('click', () => {
  hidePopUp(popUpAdd)
});

hidePopUpPictureBtn.addEventListener('click', () => {
  hidePopUp(popUpPicture)
});

editForm.addEventListener('submit', editInfo);
addForm.addEventListener('submit', addElementsItem);