import Popup from "./Popup";

export default class PopupWithForm extends Popup {
    constructor(submitCallback, popupSelector) {
        this._submitCallback = submitCallback
        super(popupSelector)
    }

    _getInputValues() {

    }

    setEventListeners() {
        
    }
}