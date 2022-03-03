import Card from './Card.js'
import FormValidator from './FormValidator.js'
import Section from './Section.js'
import Popup from './Popup.js'
import PopupWithImage from './PopupWithImage.js'
import {popUpEdit, popUpAdd, popUpPicture, showPopUpEditBtn, showPopUpAddBtn, hidePopUpEditBtn, hidePopUpAddBtn, hidePopUpPictureBtn, 
        inputName, inputProfession, inputTitle, inputUrl, itemName, itemProfession, editForm, addForm, elementsContainer,
        initialCards, config} from './constants.js'
//import {showPopUp, hidePopUp} from './utils.js'
/*
function createCard(e) {
	const card = new Card(e, '#elementsItem', handleCardClick)
	const cardElement = card.createCard()
	return cardElement
}

function initialLoad() {
	initialCards.forEach(e => {
    	const cardElement = createCard(e)
    	elementsContainer.append(cardElement)
  })
}
*/

// Новые константы
const selector = '.elements'
const popupEditSelector = '.pop-up_type_edit'
const popupAddSelector = '.pop-up_type_add'
const popupPictureSelector = '.pop-up_type_picture'


const cardList = new Section({
	items: initialCards,
	renderer: (cardItem) => {
		const card = new Card(cardItem, '#elementsItem', handleCardClick)
		const cardElement = card.createCard()
		cardList.addItem(cardElement)
		},
	},
	selector
)
cardList.renderItems()



const editFormValidation = new FormValidator(config, editForm)
editFormValidation.enableValidation()
const addFormValidation = new FormValidator(config, addForm)
addFormValidation.enableValidation()

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
  const cardElement = createCard(inputData)
  elementsContainer.prepend(cardElement)
  hidePopUp(popUpAdd)
  addForm.reset()
}
/*
function handleCardClick(name, link) {
  popUpPicture.querySelector('.pop-up__illustration').src = link
  popUpPicture.querySelector('.pop-up__illustration').alt = name
  popUpPicture.querySelector('.pop-up__caption').textContent = name
  showPopUp(popUpPicture)
}
*/
//initialLoad()

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