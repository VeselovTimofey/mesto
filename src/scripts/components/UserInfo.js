export class UserInfo {
    constructor(data) {
        this._nameProfile = document.querySelector(data.nameSelector);
        this._jobProfile = document.querySelector(data.jobSelector);
        this._imageProfile = document.querySelector(data.imageSelector);
    }

    getUserInfo() {
        return {name: this._nameProfile.textContent, job: this._jobProfile.textContent};
    }

    updateUserInfo(userInfo) {
        if (userInfo.name) {this._nameProfile.textContent = userInfo.name};
        if (userInfo.about) {this._jobProfile.textContent = userInfo.about};
        if (userInfo.avatar) {this._imageProfile.src = userInfo.avatar};
    }
}