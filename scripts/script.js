let popUp = document.querySelector('.pop-up')
let showPopUpBtn = document.querySelector('.profile__edit-button')
let hidePopUpBtn = document.querySelector('.pop-up__close-btn')
let inputName = document.querySelector('.pop-up__input_type_name')
let inputProfession = document.querySelector('.pop-up__input_type_profession')
let itemName = document.querySelector('.profile__info-item-name')
let itemProfession = document.querySelector('.profile__info-item-profession')

let editForm = document.querySelector('.pop-up__form')

function showPopUp () {
  inputName.value = itemName.textContent
  inputProfession.value = itemProfession.textContent
  popUp.classList.add('pop-up_shown')
}

function hidePopUp () {
  popUp.classList.remove('pop-up_shown')
  inputName.value = ''
  inputName.value = ''
}

function editInfo() {
  event.preventDefault()
  itemName.textContent = `${inputName.value}`  
  itemProfession.textContent = `${inputProfession.value}`
  hidePopUp()
}

showPopUpBtn.addEventListener('click', showPopUp);
hidePopUpBtn.addEventListener('click', hidePopUp);
editForm.addEventListener('submit', editInfo);