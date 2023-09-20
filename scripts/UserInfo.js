import profile from './index';

export class UserInfo {
    constructor(data) {
        this._nameProfile = profile.querySelector(data.nameSelector);
        this._jobProfile = profile.querySelector(data.jobSelector);
    }

    getUserInfo() {
        return {this._nameProfile, this._jobProfile}
    }

    setUserInfo(newName, newJob) {
        this._nameProfile.textContent = newName.value;
        this._jobProfile.textContent = newJob.value;
    }
}