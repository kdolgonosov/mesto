let popUp = document.querySelector('.pop-up__overlay')
let showPopUpBtn = document.querySelector('.profile__edit-button')
let hidePopUpBtn = document.querySelector('.pop-up__close-btn')
let saveInfoBtn = document.querySelector('.pop-up__submit-btn')
let inputName = document.querySelector('.pop-up__input_name')
let inputProfession = document.querySelector('.pop-up__input_profession')

inputName.value = 'Жак-Ив Кусто'
inputProfession.value = 'Исследователь океана'

function showPopUp () {
  popUp.classList.remove('pop-up_hidden')
  document.querySelector('.main').classList.add('main__scroll-lock')
}

function hidePopUp () {
  popUp.classList.add('pop-up_hidden')
  document.querySelector('.pop-up__input_name').value = document.querySelector('.profile__info-item-name').textContent
  document.querySelector('.pop-up__input_profession').value = document.querySelector('.profile__info-item-profession').textContent
  document.querySelector('.main').classList.remove('main__scroll-lock')
}

function editInfo() {
  let inputName = document.querySelector('.pop-up__input_name')
  let inputProfession = document.querySelector('.pop-up__input_profession')
  document.querySelector('.profile__info-item-name').textContent = `${inputName.value}`  
  document.querySelector('.profile__info-item-profession').textContent = `${inputProfession.value}`
  hidePopUp()
}

showPopUpBtn.addEventListener('click', showPopUp);
hidePopUpBtn.addEventListener('click', hidePopUp);
saveInfoBtn.addEventListener('click', editInfo);