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
        this._nameProfile.textContent = userInfo.name;
        this._jobProfile.textContent = userInfo.about;
        this._imageProfile.src = userInfo.avatar;
    }
}