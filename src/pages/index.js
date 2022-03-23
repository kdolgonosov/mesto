import './index.css'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import {showPopUpEditBtn, showPopUpAddBtn, showPopUpChgAvt, inputName, inputProfession, inputAvatar, editForm, addForm, changeAvatarForm,
  cardListSelector, popupEditSelector, popupAddSelector, popupPictureSelector, popupConfirmSelector, popupChangeAvatarSelector, profileSelectors, config} from '../components/constants.js'
import { api } from '../components/Api.js'


let userId
Promise.all([
  api.getProfile(),
  api.getInitialCards()
])
  .then((res) => {
    userInfo.setUserInfo(res[0].name, res[0].about, res[0].avatar)
    userId = res[0]._id
    res[1].reverse()
    res[1].forEach(newCard => {
      addCard(newCard)
    })
  })
  .catch(err => console.log("Ошибка", err))


function addCard(data) {
  const card = new Card(
    data,
    '#elementsItem',
    userId,
    handleCardClick,
    (id) => {
      popupConfirm.open()
      popupConfirm.changeSubmitCallback(() => {
        api.deleteCard(id)
          .then(() => {
            card.deleteCard()
          })
          .finally(() => popupConfirm.close())
          .catch(err => console.log("Ошибка", err))
      })
    },
    (id) => {
      if(card.isLiked()) {
        api.removeLike(id)
        .then(res => {
          card.setLikes(res.likes)
        })
        .catch(err => console.log("Ошибка", err))
      } else{
        api.addLike(id)
        .then(res => {
          card.setLikes(res.likes)
        })
        .catch(err => console.log("Ошибка", err))
      }
      
    }
  )
	const cardElement = card.createCard()
	cardList.addItem(cardElement)
}

const cardList = new Section({
	items: [],
	renderer: (cardItem) => {addCard(cardItem)},
	},
	cardListSelector
)
cardList.renderItems()

const userInfo = new UserInfo(profileSelectors)

const popupWithImage = new PopupWithImage(popupPictureSelector)
popupWithImage.setEventListeners()
const popupAdd = new PopupWithForm(
  popupAddSelector,
  ({ inputTitle, inputUrl }) => {
    let data = {
      name: inputTitle,
      link: inputUrl,
      _id: '',
      likes: [],
      owner: {
        _id: ''
      }      
    }
    popupAdd.toggleSubmitState(true)
    api.addCard(data.name, data.link)
      .then((res) => {
        data = {
          name: res.name,
          link: res.link,
          _id: res._id,
          likes: res.likes,
          owner: {
            _id: res.owner._id
          }
        }
        return data
      })
      .then(data => {
        popupAdd.close()
        addCard(data)
      })
      .catch(err => console.log("Ошибка", err))
      .finally(() => popupAdd.toggleSubmitState(false, "Создать"))   
  }
  )
popupAdd.setEventListeners()


const popupEdit = new PopupWithForm(
  popupEditSelector,
  ({ inputName, inputProfession }) => {
    popupEdit.toggleSubmitState(true)
    api.editProfile(inputName, inputProfession)
      .then((res) => {
        popupEdit.close()
        userInfo.setUserInfo(res.name, res.about, res.avatar)
      })
      .catch(err => console.log("Ошибка", err))
      .finally(() => popupEdit.toggleSubmitState(false, "Сохранить"))
  }
)
popupEdit.setEventListeners()

const popupConfirm = new PopupWithForm(
  popupConfirmSelector
)
popupConfirm.setEventListeners()

const popupChangeAvatar = new PopupWithForm(
  popupChangeAvatarSelector,
  ({ inputAvatarUrl }) => {
    popupChangeAvatar.toggleSubmitState(true)
    api.changeAvatar(inputAvatarUrl)
      .then(res => {
        popupChangeAvatar.close()
        userInfo.setUserInfo(res.name, res.about, res.avatar)
      })
      .catch(err => console.log("Ошибка", err))
      .finally(() => popupChangeAvatar.toggleSubmitState(false, "Сохранить"))
  }
)
popupChangeAvatar.setEventListeners()

function handleCardClick(name, link) {
  popupWithImage.open(name,link)
}
const editFormValidation = new FormValidator(config, editForm)
editFormValidation.enableValidation()
const addFormValidation = new FormValidator(config, addForm)
addFormValidation.enableValidation()
const changeAvatarFormValidation = new FormValidator(config, changeAvatarForm)
changeAvatarFormValidation.enableValidation()

showPopUpAddBtn.addEventListener('mousedown', () => {
  addFormValidation.resetValidation()
  popupAdd.open()
});

showPopUpEditBtn.addEventListener('mousedown', () => {
  const curUserInfo = userInfo.getUserInfo()
  inputName.value = curUserInfo.name
  inputProfession.value = curUserInfo.profession
  editFormValidation.resetValidation()
  popupEdit.open()
});

showPopUpChgAvt.addEventListener('mousedown', () => {
  const curUserInfo = userInfo.getUserInfo()
  inputAvatar.value = curUserInfo.avatar.src
  changeAvatarFormValidation.resetValidation()
  popupChangeAvatar.open()
})