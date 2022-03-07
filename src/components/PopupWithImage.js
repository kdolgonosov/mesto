import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._illustration = this._popup.querySelector('.pop-up__illustration')
        this._caption = this._popup.querySelector('.pop-up__caption')
    }

    open(name, link) {
        super.open()
        this._illustration.src = link
        this._illustration.alt = name
        this._caption.textContent = name
    }
}