import {showPopUp} from './utils.js'

export default class Card {
  constructor(data, template) {
    this._title = data.name
    this._image = data.link
    this._template = template
  }
  
  _getTemplate() {
    const elementsItemElement = document
      .querySelector(this._template)
      .content
      .querySelector('.elements__item')
      .cloneNode(true)

    return elementsItemElement
  }


  _handleLike(evt) {
    const eventTarget = evt.target
    eventTarget.classList.toggle('elements__footer-like-active')
  }

  _handleDelete(evt) {
    const eventTarget = evt.target.closest('.elements__item')
    eventTarget.remove()
  }

  _handleZoom(evt) {
    const pictureUrl = evt.target.src
    const pictureCaption = evt.target.nextElementSibling.firstElementChild.textContent
    document.querySelector('.pop-up_type_picture').querySelector('.pop-up__illustration').src = pictureUrl
    document.querySelector('.pop-up_type_picture').querySelector('.pop-up__illustration').alt = pictureCaption
    document.querySelector('.pop-up_type_picture').querySelector('.pop-up__caption').textContent = pictureCaption
    
    showPopUp(document.querySelector('.pop-up_type_picture'))
  }

  _setEventListeners() {
    this._card.querySelector('.elements__footer-like').addEventListener('click', this._handleLike)
    this._card.querySelector('.elements__delete-btn').addEventListener('click', this._handleDelete)
    this._card.querySelector('.elements__picture').addEventListener('click', this._handleZoom)
    }

  createCard() {
    this._card = this._getTemplate()
    this._card.querySelector('.elements__picture').src = this._image
    this._card.querySelector('.elements__picture').alt = this._title
    this._card.querySelector('.elements__footer-caption').textContent = this._title
    this._setEventListeners()

    return this._card
  }
}
