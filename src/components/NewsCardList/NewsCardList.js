import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';


function NewsCardList(props) {
  console.log(props.array);

  return (
    <div className="news-card-list">
      {Array.from(props.array).map(article =>
        <NewsCard articleData ={article} key = {article._id} />
      )}  
    </div>
  )
};

export default NewsCardList;