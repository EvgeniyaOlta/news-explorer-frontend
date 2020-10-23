import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNewsHeader.css';

function SavedNewsHeader(props) {
  
  return (
    <section className="SavedNewsHeader">
      <p className="SavedNewsHeader__caption">Сохранённые статьи</p>
      <NewsCardList></NewsCardList>
    </section>
  )
};

export default SavedNewsHeader;