import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor({ name, link }, popupSelector) {
        this._name = name
        this._link = link
        super(popupSelector)
    }
    open() {
        super._popup.querySelector('.pop-up__illustration').src = this._link
        super._popup.querySelector('.pop-up__illustration').alt = this._name
        super._popup.querySelector('.pop-up__caption').textContent = this._name
        super._popup.classList.add('pop-up_shown')
        document.addEventListener('keydown', super._handleEscClose)
        super._popup.addEventListener('click', super._handleMouseClose)
    }
}