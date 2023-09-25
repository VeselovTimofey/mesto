export class UserInfo {
    constructor(data, promiseUserInfo, callbackChangeAvatar) {
        this._nameProfile = document.querySelector(data.nameSelector);
        this._jobProfile = document.querySelector(data.jobSelector);
        this._imageProfile = document.querySelector(data.imageSelector);
        this._promiseUserInfo = promiseUserInfo;
        this._changeAvatar = callbackChangeAvatar;
    }

    getUserInfo() {
        return {name: this._nameProfile.textContent, job: this._jobProfile.textContent};
    }

    updateUserInfo(userInfo) {
        this._nameProfile.textContent = userInfo.name;
        this._jobProfile.textContent = userInfo.about;
        this._imageProfile.src = userInfo.avatar;
    }

    setUserInfo() {
        this._promiseUserInfo.then((newUserInfo) => {
            this.updateUserInfo(newUserInfo)
        });
    }
}