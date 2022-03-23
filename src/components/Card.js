export default class Card {
  constructor(data, template, userId, handleCardClick, handleDeleteClick, handleLikeClick) {
    this._title = data.name
    this._image = data.link
    this._likes = data.likes
    this._userId = userId
    this._ownerId = data.owner._id
    this._cardId = data._id
    this._template = template
    this._handleCardClick = handleCardClick
    this._handleDeleteClick = handleDeleteClick
    this._handleLikeClick = handleLikeClick
  }
  _getTemplate() {
    const elementsItemElement = document
      .querySelector(this._template)
      .content
      .querySelector('.elements__item')
      .cloneNode(true)

    return elementsItemElement
  }

  _toLike() {
    this._likeButton.classList.add('elements__footer-like-active')
  }
  _toDislike() {
    this._likeButton.classList.remove('elements__footer-like-active')
  }
  deleteCard() {
    this._card.remove()
    this.card = null
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => this._handleLikeClick(this._cardId))
    this._deleteButton.addEventListener('click', () => this._handleDeleteClick(this._cardId))
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._title, this._image))
    }
  

  isLiked() {
    return this._likes.find(user => user._id === this._userId)
  }

  setLikes(newLikes) {
    this._likes = newLikes
    const likeCounterElement = this._card.querySelector('.elements__footer-like-counter')
    likeCounterElement.textContent = this._likes.length
    if(this.isLiked()) {
      this._toLike()
    } else {
      this._toDislike()
    }
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
    this.setLikes(this._likes)
    this._setEventListeners()
    if(this._userId !== this._ownerId) {
      this._deleteButton.style.visibility = 'hidden'
    }
    return this._card
  }
}
