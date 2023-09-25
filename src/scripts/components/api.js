export class Api {

    _sendRequest(url, options) {
        return fetch(url, options)
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

    getUserInfo() {
        return this._sendRequest('https://nomoreparties.co/v1/cohort-75/users/me', { 
            headers: {
                authorization: 'a28ab119-f4d7-4d6c-a1e8-0ea16011e1f4'
            }
        })
    }

    patchUserInfo(newUserInfo) {
        return this._sendRequest('https://mesto.nomoreparties.co/v1/cohort-75/users/me', {
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


    postNewCard(newCard) {
        return this._sendRequest('https://mesto.nomoreparties.co/v1/cohort-75/cards', {
            method: 'POST',
            headers: {
              authorization: 'a28ab119-f4d7-4d6c-a1e8-0ea16011e1f4',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: newCard.name,
              link: newCard.link
            })
        })
    }

    deleteCard(idCard) {
        return this._sendRequest(`https://mesto.nomoreparties.co/v1/cohort-75/cards/${idCard}`, {
            method: 'DELETE',
            headers: {
              authorization: 'a28ab119-f4d7-4d6c-a1e8-0ea16011e1f4',
            }
        })
    }

    putLike(idCard) {
        return this._sendRequest(`https://mesto.nomoreparties.co/v1/cohort-75/cards/${idCard}/likes`, {
            method: 'PUT',
            headers: {
              authorization: 'a28ab119-f4d7-4d6c-a1e8-0ea16011e1f4',
              'Content-Type': 'application/json'
            }
        })
    }

    deleteLike(idCard) {
        return this._sendRequest(`https://mesto.nomoreparties.co/v1/cohort-75/cards/${idCard}/likes`, {
            method: 'DELETE',
            headers: {
              authorization: 'a28ab119-f4d7-4d6c-a1e8-0ea16011e1f4',
            }
        })
    }

    changeAvatar(data) {
        return this._sendRequest(`https://mesto.nomoreparties.co/v1/cohort-75/users/me/avatar`, {
            method: 'PATCH',
            headers: {
              authorization: 'a28ab119-f4d7-4d6c-a1e8-0ea16011e1f4',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({avatar: data.link})
        })
    }
}
