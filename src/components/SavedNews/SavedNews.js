import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import articlesArray from '../../utils/utils';
import './SavedNews.css';

function SavedNews() {
  let SavedNewsArray = articlesArray

  return (
    <div className="SavedNews">
      <SavedNewsHeader />
      <NewsCardList array={SavedNewsArray}></NewsCardList>
    </div>
  )
};

export default SavedNews;
