export class UserInfo {
    constructor(data) {
        this._nameProfile = document.querySelector(data.nameSelector);
        this._jobProfile = document.querySelector(data.jobSelector);
    }

    getUserInfo() {
        return {name: this._nameProfile.textContent, job: this._jobProfile.textContent};
    }

    setUserInfo(newUserInfo) {
        this._nameProfile.textContent = newUserInfo.name;
        this._jobProfile.textContent = newUserInfo.profession;
    }
}