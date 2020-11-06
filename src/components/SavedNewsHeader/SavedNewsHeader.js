import React from 'react';
import './SavedNewsHeader.css';
import { CurrentUserContext } from '../../context/CurrentUserContext.js';

function SavedNewsHeader(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const currentUserName = (currentUser ? currentUser.name : '')
  console.log(props.array)
  let uniq = {}
  const arrFiltered = (props.array ? props.array.filter(obj => !uniq[obj.keyword] && (uniq[obj.keyword] = true)) : '');
  const keywordArray= Array.from(arrFiltered).map(article => article.keyword)
  const keywordArrayString = keywordArray.join(', ')
  const lenght = (props.array ? props.array.length : '')
  
  return (
    <section className="saved-news-header">
      <h2 className="saved-news-header__caption">Сохранённые статьи</h2>
      <span className="saved-news-header__title"> {`${currentUserName}, у вас ${lenght} сохранённых статей`}</span>
      {keywordArray.length <= 3  && (
      <span className="saved-news-header__keywords">По ключевым словам: {keywordArrayString}</span>
      )}
      {keywordArray.length > 3 && (
      <span className="saved-news-header__keywords">По ключевым словам: {keywordArray[1]}, {keywordArray[2]}  и {keywordArray.length - 2}-м другим</span>
      )}
    </section>
  )
};

export default SavedNewsHeader;
