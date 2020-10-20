import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList(props) {
  return (
    <div className="NewsCardList">
        <NewsCard />
    </div>
  )
};

export default NewsCardList;