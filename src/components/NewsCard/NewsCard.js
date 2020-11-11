import React from 'react';
import './NewsCard.css';
import save from '../../images/save.svg';
import activeSave from '../../images/save-hover.svg';
import saved from '../../images/saved.svg';
import months from '../../utils/constants'
import remove from '../../images/remove.svg';
import { MainPageContext } from '../../context/MainPageContext.js';
//import { CurrentUserContext } from '../../context/CurrentUserContext.js';
import mainApi from '../../utils/MainApi';


function NewsCard(props) {
  const mainPage = React.useContext(MainPageContext);

  const [removeInfoSpan, setRemoveInfoSpan] = React.useState(false);
  const [saveInfoSpan, setSaveInfoSpan] = React.useState(false);
  const [savedCard, setSavedCard] = React.useState(null);
  const [idSearchCard, setIdSearchCard] = React.useState('');
  const article = props.article;
  const idCard = (mainPage ? idSearchCard : article._id)
  
  //на основной странице проверяем, есть ли такая статья в SavedNewsArray
  //если есть, savedCard = true
  React.useEffect(() => {
    if (mainPage) {
      const isSaved = props.savedNewsArray.some((item) => item.text === article.description
      && item.title === article.title);
      if (isSaved){
        setSavedCard(true)
      } else {
        setSavedCard(false)
      }
    }
  }, [props.savedNewsArray]);
  
  let fullDate

  function getDate(){
    if(props.pageName === 'main'){
      if(article.publishedAt !== undefined){
        const splitedDate =  article.publishedAt.split('-');
        const year = splitedDate[0];
        const date = splitedDate[2].slice(0, 2);
        const month = months.find(month => month.id === splitedDate[1])
        fullDate = `${date} ${month.name}, ${year}`
      } else{
        fullDate =''
      }
    }
    if(props.pageName !== 'main'){
      if(article.date !== undefined){
        const splitedDate =  article.date.split('-');
        const year = splitedDate[0];
        if (splitedDate[2] === undefined){
          fullDate='';
          return
        } else {
        const date = splitedDate[2].slice(0, 2);
        const month = months.find(month => month.id === splitedDate[1])
          if(month === undefined){
            fullDate='';
            return
          } else{
              fullDate = `${date} ${month.name}, ${year}`
            }
        }
      } else{
        fullDate =''
      }
    }
  }
  getDate()

  
  //Когда пользователь вошёл, иконка должна стать активной. Если новость сохранена, иконка должна быть с синей заливкой.
  //Клик по иконке без заливки должен отправлять запрос к /articles нашего API на сохранение статьи. Клик по иконке с заливкой — запрос на удаление.
  //При сохранении и удалении статьи заливка иконки должна изменяться.

  function saveArticle () {
    console.log('save')
    const articleKeyword = JSON.parse(localStorage.getItem('searchInputValue'))
    const articleTitle = article.title
    const articleText = article.description
    const articleDate = article.publishedAt
    const articleSource = article.source.name
    const articleLink = article.url
    const articleImage = (article.urlToImage === null ? '' : article.urlToImage)
    mainApi.postNewCard(articleKeyword, articleTitle, articleText, articleDate, articleSource, articleLink, articleImage).then((newSavedNews) => {
      setIdSearchCard(newSavedNews.data._id)
      props.setSavedNewsArray([...props.savedNewsArray, newSavedNews]);
    });
    //setSavedCard(true)
  }
  
  function deleteArticle () {
    console.log('del')
    props.deleteArticle(idCard);
    //setSavedCard(false);
  }

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
      <div className="news-card__image" 
      style={{ backgroundImage: `url(${mainPage ? article.urlToImage : article.image })` }}/>
      {!props.loggedIn && (
        <button className="news-card__button news-card__button_not-saved"
        onMouseOut={hiddenSaveInfoSpan} 
        onMouseOver={showSaveInfoSpan}
        style={{ backgroundImage: `url(${save})` }}></button>
      )}
      {!props.loggedIn && (
      <span 
      className="news-card__save-info-span" 
      style={{ visibility: `${saveInfoSpan ? 'visible' : 'hidden'}`}} >Войдите, чтобы сохранять статьи</span>
      )}

      {props.loggedIn && (
        <button className="news-card__button news-card__button_not-saved"
        onClick={savedCard ? deleteArticle : saveArticle }
        style={{ backgroundImage: `url(${savedCard ? saved : activeSave })`}}></button>
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

      <p className="news-card__info news-card__date">{fullDate}</p>
      <h1 className="news-card__info news-card__title">{article.title}</h1>
      <h2 className="news-card__info news-card__text">{mainPage? article.description : article.text}</h2>
      <h3 className="news-card__info news-card__source">{mainPage ? article.source.name: article.source}</h3>
    </section>
  )
};

export default NewsCard;