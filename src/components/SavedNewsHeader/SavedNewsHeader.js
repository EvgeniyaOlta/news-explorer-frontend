import React from 'react';
import './SavedNewsHeader.css';
import { CurrentUserContext } from '../../context/CurrentUserContext.js';

function SavedNewsHeader(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const currentUserName = (currentUser ? currentUser.name : '')
  
  const lenght = (props.array ? props.array.length : '');
  const keywordArray= Array.from(props.array).map(article => article.keyword);
  
  function sortByFrequencyAndRemoveDuplicates(array) {
    var frequency = {}, value;
    for(var i = 0; i < array.length; i++) {
      value = array[i];
      if(value in frequency) {
        frequency[value]++;
      }
      else {
        frequency[value] = 1;
      }
    }
    var uniques = [];
    for(value in frequency) {
      uniques.push(value);
    }
    function compareFrequency(a, b) {
      return frequency[b] - frequency[a];
    }
    return uniques.sort(compareFrequency);
  }
  const sortedKeywordArray = sortByFrequencyAndRemoveDuplicates(keywordArray);
  const keywordArrayString = sortedKeywordArray.join(', ');
  
  console.log(sortedKeywordArray, keywordArrayString);

  return (
    <section className="saved-news-header">
      <h2 className="saved-news-header__caption">Сохранённые статьи</h2>
      <span className="saved-news-header__title"> {`${currentUserName}, у вас ${lenght} сохранённых статей`}</span>
      {sortedKeywordArray.length <= 3  && (
      <span className="saved-news-header__keywords">По ключевым словам: {keywordArrayString}</span>
      )}
      {sortedKeywordArray.length > 3 && (
      <span className="saved-news-header__keywords">По ключевым словам: {sortedKeywordArray[0]}, {sortedKeywordArray[1]}  и {sortedKeywordArray.length - 2}-м другим</span>
      )}
    </section>
  )
};

export default SavedNewsHeader;
