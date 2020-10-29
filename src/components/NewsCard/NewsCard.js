import React from 'react';
import './NewsCard.css';
import save from '../../images/save.svg';
import saved from '../../images/saved.svg';
import remove from '../../images/remove.svg';
import { MainPageContext } from '../context/MainPageContext.js';

function NewsCard(props) {
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
      <div className="news-card__image" style={{ backgroundImage: `url(${props.articleData.image})` }}/>
      {mainPage && (
        <button className={`news-card__button ${props.articleData.save === false ? "news-card__button_not-saved" : "news-card__button_saved"}`}
        onMouseOut={hiddenSaveInfoSpan} 
        onMouseOver={showSaveInfoSpan}></button>
      )}
      {mainPage === false && (
        <button 
        className="news-card__button news-card__button-remove" 
        style={{ backgroundImage: `url(${remove})`}} 
        onMouseOut={hiddenRemoveInfoSpan} 
        onMouseOver={showRemoveInfoSpan}></button>
      )}
      {mainPage === false && (
        <span className="news-card__keyword" >{props.articleData.keyword}</span>
      )}
      <span className="news-card__remove-info-span" style={{ visibility: `${removeInfoSpan ? 'visible' : 'hidden'}`}} >Убрать из сохранённых</span>
      <span className="news-card__save-info-span" style={{ visibility: `${saveInfoSpan ? 'visible' : 'hidden'}`}} >Войдите, чтобы сохранять статьи</span>
      <p className="news-card__info news-card__date">{props.articleData.date}</p>
      <h1 className="news-card__info news-card__title">{props.articleData.title}</h1>
      <h2 className="news-card__info news-card__text">{props.articleData.text}</h2>
      <h3 className="news-card__info news-card__source">{props.articleData.source}</h3>
    </section>
  )
};

export default NewsCard;