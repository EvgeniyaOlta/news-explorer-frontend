import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';


function NewsCardList(props) {
  const array = Array.from(props.array);

  let cardsAmount = array.length;
  const [usingCards, setUsingCards] = React.useState(3);
  let rest = cardsAmount - usingCards;
  
  let newArray = array.slice(0, usingCards)

  function showMoreCards() {
    setUsingCards(usingCards + 3);
  }

  return (
    <section className="news-card-list"> 
      <div className="news-card-list__list">
        {newArray.map((article, index) =>
          <NewsCard 
          article ={article} 
          key ={index} 
          loggedIn={props.loggedIn}
          setSavedNewsArray={props.setSavedNewsArray}
          savedNewsArray={props.savedNewsArray}
          searchInput={props.searchInput}
          pageName={props.pageName}/>
        )}  
      </div>
      {cardsAmount > 3 && rest > 0 && (
        <button className="news-card-list__button" onClick={showMoreCards}>Показать ещë</button>
      )}
      
    </section>
  )
};

export default NewsCardList;
