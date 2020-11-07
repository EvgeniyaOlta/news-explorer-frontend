const jwt = localStorage.getItem('jwt')

class MainApi {
  constructor(data) {
    this._baseUrl = data.baseUrl;
    this._token = data.token;
  }
  
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {headers: {
      authorization: `Bearer ${this._token}`
      }
    })
    .then(this._returnErrorResponse)
  }

  postNewCard (articleKeyword, articleTitle, articleText, articleDate, articleSource, articleLink, articleImage) {
    return fetch(`${this._baseUrl}/articles`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${this._token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        keyword: articleKeyword,
        title: articleTitle,
        text: articleText,
        date: articleDate,
        source: articleSource,
        link: articleLink,
        image: articleImage
      })
    })
  .then(this._returnErrorResponse)
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/articles`, {headers: {
      authorization: `Bearer ${this._token}`
      }
    })
    .then(this._returnErrorResponse)
  }

  deleteCard (articleId) {
    return fetch(`${this._baseUrl}/articles/${articleId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${this._token}`
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

const mainApi = new MainApi({
  baseUrl: 'https://news-olta.students.nomoreparties.co',
  token: jwt,
});

export default mainApi;
