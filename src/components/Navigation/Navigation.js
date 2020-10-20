import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <section className="Navigation">
      <h1 className="Navigation__button">Главная</h1>
      <h1 className="Navigation__button">Сохраненные страницы</h1>
      <h1 className="Navigation__button">Авторизоваться</h1>
    </section>
  )
};

export default Navigation;