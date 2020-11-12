import React from 'react';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__image"></div>
      <h3 className="not-found__title">Ничего не найдено</h3>
      <p className="not-found__info-line">К сожалению, по вашему запросу ничего не найдено.</p>
    </div>
  )
};

export default NotFound;
