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
const elementsItemTemplate = document.querySelector('#elementsItem').content;

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

function createCard (caption, url) {
  const elementsItemElement = elementsItemTemplate.querySelector('.elements__item').cloneNode(true)
  elementsItemElement.querySelector('.elements__picture').src = url
  elementsItemElement.querySelector('.elements__picture').alt = caption
  elementsItemElement.querySelector('.elements__footer-caption').textContent = caption

  elementsItemElement.querySelector('.elements__footer-like').addEventListener('click', (evt) => {
    const eventTarget = evt.target
    eventTarget.classList.toggle('elements__footer-like-active')
  })
  elementsItemElement.querySelector('.elements__delete-btn').addEventListener('click', (evt) => {
    const eventTarget = evt.target.closest('.elements__item')
    eventTarget.remove()
  })
  elementsItemElement.querySelector('.elements__picture').addEventListener('click', (evt) => {
    const pictureUrl = evt.target.src
    const pictureCaption = evt.target.nextElementSibling.firstElementChild.textContent
    popUpPicture.querySelector('.pop-up__illustration').src = pictureUrl
    popUpPicture.querySelector('.pop-up__illustration').alt = pictureCaption
    popUpPicture.querySelector('.pop-up__caption').textContent = pictureCaption
    showPopUp(popUpPicture)
  })

  return elementsItemElement
}

function initialLoad() {
  initialCards.forEach(e => { 
    elementsContainer.append(createCard(e.name, e.link))
  })
}

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
  const newCard = createCard(inputTitle.value, inputUrl.value)
  elementsContainer.prepend(newCard)
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

function resetValidation(form) {
  form.querySelector('.pop-up__submit-btn').classList.add('pop-up__submit-btn_disabled')
  form.querySelector('.pop-up__submit-btn').setAttribute('disabled', 1)
  Array.from(form.querySelectorAll('.pop-up__input')).forEach((input) => {
    hideError(input, 'pop-up__error_visible')
    input.classList.remove('pop-up__input_type_error')
  })
}


initialLoad()

showPopUpEditBtn.addEventListener('click', () => {  
  inputName.value = itemName.textContent
  inputProfession.value = itemProfession.textContent
  resetValidation(editForm)
  showPopUp(popUpEdit)
});

showPopUpAddBtn.addEventListener('click', () => {
  addForm.reset()
  resetValidation(addForm)
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


