import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import articlesArray from '../../utils/constants';
import './SavedNews.css';

function SavedNews() {
  function isSaved(article) {
    return article.save === true;
  }
  
  let SavedNewsArray = Array.from(articlesArray).filter(isSaved);

  return (
    <section className="saved-news">
      <SavedNewsHeader array={SavedNewsArray}/>
      <NewsCardList array={SavedNewsArray}></NewsCardList>
    </section>
  )
};

export default SavedNews;
