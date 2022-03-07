import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector)
        this._submitCallback = submitCallback

        this._form = this._popup.querySelector('.pop-up__form')
    }

    _getInputValues() {
        this._inputList = this._form.querySelectorAll('.pop-up__input')
        this._valueList = {}
        this._inputList.forEach(input => {
            this._valueList[input.name] = input.value            
        });
        return this._valueList
    }

    close() {
        super.close()
        this._form.reset()
    }

    setEventListeners() {
        super.setEventListeners()
        //this._popup.addEventListener('submit', this._submitCallback)
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._submitCallback(this._getInputValues())
            this.close()
        })
    }
}