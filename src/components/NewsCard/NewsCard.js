import React from 'react';
import './NewsCard.css';
import save from '../../images/save.svg';
import saved from '../../images/saved.svg';

function NewsCard(props) {
  return (
    <section className="news-card" >
      <div className="news-card__image" style={{ backgroundImage: `url(${props.articleData.image})` }}/>
      <button className="news-card__button" style={{ backgroundImage: `url(${props.articleData.save ? saved : save})` }}></button>
      <p className="news-card__info news-card__date">{props.articleData.date}</p>
      <h1 className="news-card__info news-card__title">{props.articleData.title}</h1>
      <h2 className="news-card__info news-card__text">{props.articleData.text}</h2>
      <h3 className="news-card__info news-card__source">{props.articleData.source}</h3>
    </section>
  )
};

export default NewsCard;