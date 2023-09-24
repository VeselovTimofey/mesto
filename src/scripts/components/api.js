export class Api {
    getUserInfo() {
        return fetch('https://nomoreparties.co/v1/cohort-75/users/me', {
            headers: {
                authorization: 'a28ab119-f4d7-4d6c-a1e8-0ea16011e1f4'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    patchUserInfo(newUserInfo) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-75/users/me', {
            method: 'PATCH',
            headers: {
              authorization: 'a28ab119-f4d7-4d6c-a1e8-0ea16011e1f4',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: newUserInfo.name,
              about: newUserInfo.profession
            })
          })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    getFirstCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-75/cards', {
            headers: {
                authorization: 'a28ab119-f4d7-4d6c-a1e8-0ea16011e1f4'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }
}