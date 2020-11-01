import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SearchResult.css';
import articlesArray from '../../utils/utils';


function SearchResult() {
  let SearchArray = articlesArray

  return (
    <div className="search-result"> 
      <h2 className="search-result__title">Результаты поиска</h2>
      <NewsCardList array={SearchArray}></NewsCardList>
    </div>
  )
};

export default SearchResult;