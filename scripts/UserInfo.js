export default class UserInfo {
    constructor({ name, proffesion }) {
        this._name = document.querySelector(name)
        this._proffesion = document.querySelector(proffesion)
    }

    getUserInfo() {
        this._name.textContent = `${this._name.value}`  
        this._proffesion.textContent = `${this._proffesion.value}`
    }

    setUserInfo() {
        this._name.textContent = `${this._name.value}`  
        this._proffesion.textContent = `${this._proffesion.value}`
    }
}