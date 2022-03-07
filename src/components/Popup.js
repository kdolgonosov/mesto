export default class Popup {
    constructor(popupSelector) {        
        this._popup = document.querySelector(popupSelector)
    }

    open() {
        this._popup.classList.add('pop-up_shown')
        document.addEventListener('keydown', (evt) => this._handleEscClose(evt))
    }

    close() {
        this._popup.classList.remove('pop-up_shown')
        document.removeEventListener('keydown', (evt) => this._handleEscClose(evt))
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
        this._popup.addEventListener('click', (evt) => this._handleMouseClose(evt))
    }
}