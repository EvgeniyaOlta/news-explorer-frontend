class NewsApi {
  constructor(data) {
    this._baseUrl = data.baseUrl
    this._apiKey = data.apiKey
  }
  getRequest(searchRequest, currentDate, weekAgoDate) {
    const url = `${this._baseUrl}/v2/everything?` +
          `q=${searchRequest}&` +
          `apiKey=${this._apiKey}&` +
          `from=${weekAgoDate}&` +
          `to=${currentDate}&` +
          'pageSize=100';

    return fetch(url, {headers: {
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

export const newsApi = new NewsApi({
  baseUrl: 'https://newsapi.org',
  apiKey: '2257ad9667754c0fb61dfa36866b5d0e'
})


//запрос — то, что ввёл пользователь в поиск;
// apiKey — ключ, который вы получите после регистрации;
//from — 7 дней назад от текущей даты;
//to — текущая дата;
// pageSize — максимально допустимый массив. Выберите 100 статей — это ограничение бесплатной версии.
    