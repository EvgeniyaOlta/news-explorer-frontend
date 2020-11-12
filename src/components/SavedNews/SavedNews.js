import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

function SavedNews(props) {
  const [pageName, setPageName] = React.useState('saved-news');

  return (
    <section className="saved-news">
      <SavedNewsHeader array={props.savedNewsArray}/>
      <NewsCardList 
      array={props.savedNewsArray} 
      pageName={pageName} 
      setPageName={setPageName}
      deleteArticle={props.deleteArticle}></NewsCardList>
    </section>
  )
};

export default SavedNews;
