import './index.css'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import {showPopUpEditBtn, showPopUpAddBtn, inputName, inputProfession, editForm, addForm, initialCards,
  cardListSelector, popupEditSelector, popupAddSelector, popupPictureSelector, profileSelectors, config} from '../components/constants.js'


function addCard(data) {
  const card = new Card(data, '#elementsItem', handleCardClick)
	const cardElement = card.createCard()
	cardList.addItem(cardElement)
}

const cardList = new Section({
	items: initialCards,
	renderer: (cardItem) => {addCard(cardItem)},
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
    addCard(data)
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
  const curUserInfo = userInfo.getUserInfo()
  inputName.value = curUserInfo.name
  inputProfession.value = curUserInfo.profession
  editFormValidation.resetValidation()
  popupEdit.open()
});