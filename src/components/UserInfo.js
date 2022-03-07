export default class UserInfo {
    constructor({ name, proffesion }) {
        this._name = document.querySelector(name)
        this._proffesion = document.querySelector(proffesion)
    }

    getUserInfo() {
        this.userInfoList = {
            name: this._name.textContent,
            profession: this._proffesion.textContent
        }
        return this.userInfoList
    }

    setUserInfo({ inputName, inputProfession }) {        
        this._name.textContent = inputName  
        this._proffesion.textContent = inputProfession
    }
}