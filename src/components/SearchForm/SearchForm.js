import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search-form">
      <h1 className="search-form__title">Что творится в мире?</h1>
      <p className="search-form__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <form className="search-form__search-block">
        <input className="search-form__input" type='text' placeholder='Введите тему новости' />
        <button className="search-form__button" type='submit'>Искать</button>
      </form>
    </section>
  )
};

export default SearchForm;