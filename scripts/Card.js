export default class Card {
  constructor(data, template, handleCardClick) {
    this._title = data.name
    this._image = data.link
    this._template = template
    this._handleCardClick = handleCardClick
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

  _setEventListeners() {
    this._likeButton.addEventListener('click', this._handleLike)
    this._deleteButton.addEventListener('click', this._handleDelete)
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._title, this._image)
    })
    }

  createCard() {
    this._card = this._getTemplate()
    this._likeButton = this._card.querySelector('.elements__footer-like')
    this._deleteButton = this._card.querySelector('.elements__delete-btn')
    this._cardImage = this._card.querySelector('.elements__picture')
    this._cardCaption = this._card.querySelector('.elements__footer-caption')
    this._cardImage.src = this._image
    this._cardImage.alt = this._title
    this._cardCaption.textContent = this._title
    this._setEventListeners()
    return this._card
  }
}
