import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';
import mainApi from '../../utils/MainApi'

function SavedNews(props) {
  const [pageName, setPageName] = React.useState('saved-news');

  React.useEffect(() => {
  
    mainApi.getInitialCards()
    .then(cardsInfoData => {
      console.log('sdsd', cardsInfoData.data)
      props.setSavedNewsArray(cardsInfoData.data);
    })
    .catch(() => {
     console.error('Что-то пошло не так.');
    });
  }, []);

  return (
    <section className="saved-news">
      <SavedNewsHeader array={props.savedNewsArray}/>
      <NewsCardList array={props.savedNewsArray} pageName={pageName}></NewsCardList>
    </section>
  )
};

export default SavedNews;
