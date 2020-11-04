import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SearchResult.css';
//import articlesArray from '../../utils/utils';


function SearchResult(props) {

  return (
    <div className="search-result"> 
      <h2 className="search-result__title">Результаты поиска</h2>
      <NewsCardList 
      array={props.searchResultData} 
      searchError={props.searchError}
      loggedIn={props.loggedIn}></NewsCardList>
      {props.searchError && (
        <span className="search-result__error-info">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>
      )}
    </div>
  )
};

export default SearchResult;