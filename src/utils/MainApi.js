class MainApi {
  constructor(data) {
    this._baseUrl = data.baseUrl
    this._authorizationNumber = data.authorizationNumber
  }

  postNewCard (newCardName, newCardLink) {
    console.log(newCardLink)
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._authorizationNumber,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newCardName,
        link: newCardLink
      })
    })
  .then(this._returnErrorResponse)
  }

  deleteCard (cardId) {
    console.log(`${this._baseUrl}/articles/${cardId}`)
    return fetch(`${this._baseUrl}/articles/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorizationNumber
        }
    })
  .then(this._returnErrorResponse)
  }

  _returnErrorResponse(res) {
    if (res.ok) {
      return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export const mainApi = new MainApi({
  baseUrl: 'https://news-olta.students.nomoreparties.co',
  authorizationNumber: '700729c8-6f90-4ed7-bfdf-eebcd18bcb3c'
});