export class UserInfo {
    constructor(data, callbackGetUserInfo) {
        this._nameProfile = document.querySelector(data.nameSelector);
        this._jobProfile = document.querySelector(data.jobSelector);
        this._imageProfile = document.querySelector(data.imageSelector);
        this._callbackGetUserInfo = callbackGetUserInfo;
    }

    getUserInfo() {
        return {name: this._nameProfile.textContent, job: this._jobProfile.textContent};
    }

    updateUserInfo(newUserInfo) {
        this._nameProfile.textContent = newUserInfo.name;
        this._jobProfile.textContent = newUserInfo.about;
        this._imageProfile.src = newUserInfo.avatar;
    }

    setUserInfo() {
        const promiseUserInfo = this._callbackGetUserInfo();
        promiseUserInfo.then(newUserInfo => this.updateUserInfo(newUserInfo));
    }
}