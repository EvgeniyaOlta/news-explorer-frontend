import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SearchResult.css';

function SearchResult(props) {

  return (
    <div className="search-result"> 
      <h2 className="search-result__title">Результаты поиска</h2>
      <NewsCardList 
      array={props.searchResultArray} 
      searchError={props.searchError}
      loggedIn={props.loggedIn}
      setSavedNewsArray={props.setSavedNewsArray}
      savedNewsArray={props.savedNewsArray}
      searchResultArray={props.searchResultArray}
      searchInput={props.searchInput}
      pageName={props.pageName}
      deleteArticle={props.deleteArticle}></NewsCardList>
      {props.searchError && (
        <span className="search-result__error-info">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>
      )}
    </div>
  )
};

export default SearchResult;