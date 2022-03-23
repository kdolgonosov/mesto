export default class UserInfo {
    constructor({ name, profession, profileAvatarSelector }) {
        this._name = document.querySelector(name)
        this._profession = document.querySelector(profession)
        this._profileAvatarElement = document.querySelector(profileAvatarSelector)
    }

    getUserInfo() {
        this.userInfoList = {
            name: this._name.textContent,
            profession: this._profession.textContent,
            avatar: this._profileAvatarElement
        }
        return this.userInfoList
    }
    setUserInfo(inputName, inputProfession, avatar) {   
        this._name.textContent = inputName  
        this._profession.textContent = inputProfession
        this._profileAvatarElement.src = avatar
    }
}
