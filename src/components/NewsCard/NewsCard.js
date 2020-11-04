import React from 'react';
import './NewsCard.css';
//import save from '../../images/save.svg';
//import saved from '../../images/saved.svg';
import months from '../../utils/constants'
import remove from '../../images/remove.svg';
import { MainPageContext } from '../../context/MainPageContext.js';

function NewsCard(props) {
  const article = props.article;

  const splitedDate = article.publishedAt.split('-');
  const year = splitedDate[0]
  const date = splitedDate[2].slice(0, 2)
  const month = months.find(month => month.id === splitedDate[1]);

  const mainPage = React.useContext(MainPageContext);
  const [removeInfoSpan, setRemoveInfoSpan] = React.useState(false);
  const [saveInfoSpan, setSaveInfoSpan] = React.useState(false);

  function showRemoveInfoSpan(){
    setRemoveInfoSpan(true);
  }
  function hiddenRemoveInfoSpan(){
    setRemoveInfoSpan(false);
  }

  function showSaveInfoSpan(){
    setSaveInfoSpan(true);
  }
  function hiddenSaveInfoSpan(){
    setSaveInfoSpan(false);
  }

  return (
    <section className="news-card" >
      <div className="news-card__image" style={{ backgroundImage: `url(${article.urlToImage})` }}/>
      {!props.loggedIn && (
        <button className="news-card__button news-card__button_not-saved"
        onMouseOut={hiddenSaveInfoSpan} 
        onMouseOver={showSaveInfoSpan}></button>
      )}
      {!props.loggedIn && (
      <span className="news-card__save-info-span" style={{ visibility: `${saveInfoSpan ? 'visible' : 'hidden'}`}} >Войдите, чтобы сохранять статьи</span>
      )}
      {props.loggedIn && (
        <button className={`news-card__button ${article.save === false ? "news-card__button_not-saved" : "news-card__button_saved"}`}
        onMouseOut={hiddenSaveInfoSpan} 
        onMouseOver={showSaveInfoSpan}></button>
      )}


      {!mainPage && (
        <button 
        className="news-card__button news-card__button-remove" 
        style={{ backgroundImage: `url(${remove})`}} 
        onMouseOut={hiddenRemoveInfoSpan} 
        onMouseOver={showRemoveInfoSpan}></button>
      )}

      {!mainPage && (
        <span className="news-card__remove-info-span" style={{ visibility: `${removeInfoSpan ? 'visible' : 'hidden'}`}} >Убрать из сохранённых</span>
      )} 

      {!mainPage && (
        <span className="news-card__keyword">Ключевое слово</span>
      )}

      <p className="news-card__info news-card__date">{date} {month.name}, {year}</p>
      <h1 className="news-card__info news-card__title">{article.title}</h1>
      <h2 className="news-card__info news-card__text">{article.description}</h2>
      <h3 className="news-card__info news-card__source">{article.source.name}</h3>
    </section>
  )
};

export default NewsCard;