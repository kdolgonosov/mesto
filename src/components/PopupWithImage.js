import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
    }

    open(name, link) {
        super.open()
        this._popup.querySelector('.pop-up__illustration').src = link
        this._popup.querySelector('.pop-up__illustration').alt = name
        this._popup.querySelector('.pop-up__caption').textContent = name
    }
}