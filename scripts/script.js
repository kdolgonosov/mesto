const popUpEdit = document.querySelector('.pop-up_type_edit')
const popUpAdd = document.querySelector('.pop-up_type_add')
const popUpPicture = document.querySelector('.pop-up_type_picture')

const showPopUpEditBtn = document.querySelector('.profile__edit-button')
const showPopUpAddBtn = document.querySelector('.profile__add-button')

const hidePopUpEditBtn = document.querySelector('.pop-up-edit-close-btn')
const hidePopUpAddBtn = document.querySelector('.pop-up-add-close-btn')
const hidePopUpPicture = document.querySelector('.pop-up-picture-close-btn')



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

function initialLoad() {
  initialCards.forEach(e => {
    const elementsItemElement = elementsItemTemplate.querySelector('.elements__item').cloneNode(true)
    elementsItemElement.querySelector('.elements__picture').src = e.link
    elementsItemElement.querySelector('.elements__picture').alt = e.name
    elementsItemElement.querySelector('.elements__footer-caption').textContent = e.name  
    elementsContainer.append(elementsItemElement)
    
  })
  setEventListeners()
}
function setEventListeners() {
  const likeBtns = document.querySelectorAll('.elements__footer-like')
  likeBtns.forEach(e => {
    e.addEventListener('click', (evt) => {
      const eventTarget = evt.target
      eventTarget.classList.toggle('elements__footer-like-active')
    })
  })

  const deleteBtns = document.querySelectorAll('.elements__delete-btn')
  deleteBtns.forEach(e => {
    e.addEventListener('click', (evt) => {
      const eventTarget = evt.target.closest('.elements__item')
      eventTarget.remove()
    })
  })
  const pictures = document.querySelectorAll('.elements__picture')
  pictures.forEach(e => {
    e.addEventListener('click', (evt) => {
      const pictureUrl = evt.target.src
      const pictureCaption = evt.target.nextElementSibling.firstElementChild.textContent
      console.log(pictureUrl)
      console.log(pictureCaption)
      showPopUpPicture(pictureUrl, pictureCaption)
    })
  })
}


function showPopUpPicture (url, caption) {
  popUpPicture.querySelector('.pop-up__illustration').src = url
  popUpPicture.querySelector('.pop-up__illustration').alt = caption
  popUpPicture.querySelector('.pop-up__caption').textContent = caption
  popUpPicture.classList.add('pop-up_shown')
}

function showPopUp (target) {
  if (target == popUpEdit) {
    inputName.value = itemName.textContent
    inputProfession.value = itemProfession.textContent
  }
  target.classList.add('pop-up_shown')
}

function hidePopUp (target) {
  target.classList.remove('pop-up_shown')
  if (target == popUpEdit) {
    inputName.value = ''
    inputName.value = ''
  } else if (target == popUpAdd) {
    inputTitle.value = ''
    inputUrl.value = ''
  } else {
    return
  }
}

function editInfo() {
  event.preventDefault()
  itemName.textContent = `${inputName.value}`  
  itemProfession.textContent = `${inputProfession.value}`
  hidePopUp(popUpEdit)
}

function addElementsItem() {
  event.preventDefault()
  const elementsItemElement = elementsItemTemplate.querySelector('.elements__item').cloneNode(true)
  elementsItemElement.querySelector('.elements__picture').src = inputUrl.value
  elementsItemElement.querySelector('.elements__picture').alt = inputTitle.value
  elementsItemElement.querySelector('.elements__footer-caption').textContent = inputTitle.value
  elementsContainer.prepend(elementsItemElement)
  setEventListeners()
  hidePopUp(popUpAdd)
}

initialLoad()

showPopUpEditBtn.addEventListener('click', showPopUp.bind(null, popUpEdit));
showPopUpAddBtn.addEventListener('click', showPopUp.bind(null, popUpAdd));

hidePopUpEditBtn.addEventListener('click', hidePopUp.bind(null, popUpEdit));
hidePopUpAddBtn.addEventListener('click', hidePopUp.bind(null, popUpAdd));
hidePopUpPicture.addEventListener('click', hidePopUp.bind(null, popUpPicture));

editForm.addEventListener('submit', editInfo);
addForm.addEventListener('submit', addElementsItem);