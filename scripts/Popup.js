export default class Popup {
    constructor(popupSelector) {
        
        this._popup = document.querySelector(popupSelector)
    }

    open() {
        this._popup.classList.add('pop-up_shown')
        //document.addEventListener('keydown', this._handleEscClose)
        //this._popup.addEventListener('click', this._handleMouseClose)
    }

    close() {
        this._popup.classList.remove('pop-up_shown')
        //document.removeEventListener('keydown', this._handleEscClose)
        //this._popup.removeEventListener('click', this._handleMouseClose)  
    }

    _handleMouseClose(evt) {
        if (evt.target === evt.currentTarget) {
            this.close()
          }
    }
    _handleEscClose(evt) {
        if(evt.key === 'Escape') {
            this.close()
          }
    }

    setEventListeners() {
        this._popup.querySelector('.pop-up__close-btn').addEventListener('click', () => this.close())
        this._popup.addEventListener('keydown', () => this._handleEscClose.close())
        this._popup.addEventListener('click', () => this._handleMouseClose.close())
    }
}