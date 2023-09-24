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

    setUserInfo() {
        const promiseUserInfo = this._callbackGetUserInfo();
        promiseUserInfo.then((newInfo) => {
            this._nameProfile.textContent = newInfo.name;
            this._jobProfile.textContent = newInfo.about;
            this._imageProfile.src = newInfo.avatar;
        })
    }
}