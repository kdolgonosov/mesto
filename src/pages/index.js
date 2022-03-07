import './index.css'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import {showPopUpEditBtn, showPopUpAddBtn, inputName, inputProfession, editForm, addForm, initialCards,
  cardListSelector, popupEditSelector, popupAddSelector, popupPictureSelector, profileSelectors, config} from '../components/constants.js'

const cardList = new Section({
	items: initialCards,
	renderer: (cardItem) => {
		const card = new Card(cardItem, '#elementsItem', handleCardClick)
		const cardElement = card.createCard()
		cardList.addItem(cardElement)
		},
	},
	cardListSelector
)
cardList.renderItems()

const userInfo = new UserInfo(profileSelectors)

const popupWithImage = new PopupWithImage(popupPictureSelector)
const popupAdd = new PopupWithForm(
  popupAddSelector,
  ({ inputTitle, inputUrl }) => {
    const data = {
      name: inputTitle,
      link: inputUrl
    }
    const newCard = new Card(data, '#elementsItem', handleCardClick)
    const newCardElement = newCard.createCard()
    cardList.addItem(newCardElement)
  }
  )
popupAdd.setEventListeners()


const popupEdit = new PopupWithForm(
  popupEditSelector,
  ({ inputName, inputProfession }) => {
    userInfo.setUserInfo({ inputName, inputProfession })
    popupEdit.close()
  }
)
popupEdit.setEventListeners()


function handleCardClick(name, link) {
  popupWithImage.open(name,link)
  popupWithImage.setEventListeners()
}

const editFormValidation = new FormValidator(config, editForm)
editFormValidation.enableValidation()
const addFormValidation = new FormValidator(config, addForm)
addFormValidation.enableValidation()

showPopUpAddBtn.addEventListener('click', () => {
  addFormValidation.resetValidation()
  popupAdd.open()
});

showPopUpEditBtn.addEventListener('click', () => {
  inputName.value = userInfo.getUserInfo().name
  inputProfession.value = userInfo.getUserInfo().profession
  editFormValidation.resetValidation()
  popupEdit.open()
});