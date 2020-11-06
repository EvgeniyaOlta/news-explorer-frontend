import React from 'react';
import './NewsCard.css';
//import save from '../../images/save.svg';
//import saved from '../../images/saved.svg';
import months from '../../utils/constants'
import remove from '../../images/remove.svg';
import { MainPageContext } from '../../context/MainPageContext.js';
import mainApi from '../../utils/MainApi'

function NewsCard(props) {
  const mainPage = React.useContext(MainPageContext);
  const [removeInfoSpan, setRemoveInfoSpan] = React.useState(false);
  const [saveInfoSpan, setSaveInfoSpan] = React.useState(false);
  //const savedNewsArray = (props.savedNewsArray ? props.savedNewsArray : '')
  const article = props.article;
  
  const splitedDate =  (props.pageName === 'main' ? article.publishedAt.split('-') : article.date.split('-'));
  const year = splitedDate[0];
  const date = splitedDate[2].slice(0, 2);
  const month = months.find(month => month.id === splitedDate[1])

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
  
  function saveArticle () {
    console.log(props.searchInput)
    const articleKeyword = props.searchInput
    const articleTitle = props.article.title
    const articleText = props.article.description
    const articleDate = props.article.publishedAt
    const articleSource = props.article.source.name
    const articleLink = props.article.url
    const articleImage = props.article.urlToImage
    mainApi.postNewCard(articleKeyword, articleTitle, articleText, articleDate, articleSource, articleLink, articleImage).then((newSavedNews) => {
      props.setSavedNewsArray([...props.savedNewsArray, newSavedNews]);
    });
    console.log(props.searchInput)
  }

  function deleteArticle () {
    console.log(props.savedNewsArray)
    mainApi.deleteCard(props.article._id).then(() => {
    const newSavedNewsArray = props.savedNewsArray.filter(function(item) {
      return props.article._id !== item._id;
      });
      props.setSavedNewsArray(newSavedNewsArray);
    });
  }


  return (
    <section className="news-card" >
      <div className="news-card__image" style={{ backgroundImage: `url(${mainPage ? article.urlToImage : article.image })` }}/>
      {!props.loggedIn && (
        <button className="news-card__button news-card__button_not-saved"
        onMouseOut={hiddenSaveInfoSpan} 
        onMouseOver={showSaveInfoSpan}></button>
      )}
      {!props.loggedIn && (
      <span className="news-card__save-info-span" style={{ visibility: `${saveInfoSpan ? 'visible' : 'hidden'}`}} >Войдите, чтобы сохранять статьи</span>
      )}
      {props.loggedIn && (
        <button className="news-card__button news-card__button_not-saved"
        onMouseOut={hiddenSaveInfoSpan} 
        onMouseOver={showSaveInfoSpan}
        onClick={saveArticle}></button>
      )}


      {!mainPage && (
        <button 
        className="news-card__button news-card__button-remove" 
        style={{ backgroundImage: `url(${remove})`}} 
        onMouseOut={hiddenRemoveInfoSpan} 
        onMouseOver={showRemoveInfoSpan}
        onClick={deleteArticle}></button>
      )}

      {!mainPage && (
        <span className="news-card__remove-info-span" style={{ visibility: `${removeInfoSpan ? 'visible' : 'hidden'}`}} >Убрать из сохранённых</span>
      )} 

      {!mainPage && (
        <span className="news-card__keyword">{props.article.keyword}</span>
      )}

      <p className="news-card__info news-card__date">{date} {month.name}, {year}</p>
      <h1 className="news-card__info news-card__title">{article.title}</h1>
      <h2 className="news-card__info news-card__text">{mainPage? article.description : article.text}</h2>
      <h3 className="news-card__info news-card__source">{mainPage ? article.source.name: article.source}</h3>
    </section>
  )
};

export default NewsCard;