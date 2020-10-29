import React from 'react';
import './SavedNewsHeader.css';

function SavedNewsHeader(props) {
  
  let uniq = {}
  const arrFiltered = props.array.filter(obj => !uniq[obj.keyword] && (uniq[obj.keyword] = true));
  const keywordArray= Array.from(arrFiltered).map(article => article.keyword)
  console.log(keywordArray)

  return (
    <section className="saved-news-header">
      <h2 className="saved-news-header__caption">Сохранённые статьи</h2>
      <span className="saved-news-header__title"> {`Грета, у вас ${props.array.length} сохранённых статей`}</span>
      <span className="saved-news-header__keywords">По ключевым словам: {keywordArray[1]}, {keywordArray[2]}  и {keywordArray.length - 2}-м другим</span>
    </section>
  )
};

export default SavedNewsHeader;