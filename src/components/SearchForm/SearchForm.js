import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className="SearchForm">
      <h1 className="SearchForm__title">Что творится в мире?</h1>
      <p className="SearchForm__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <form>
        <input className="SearchForm__input" type='text' placeholder='Введите тему новости' />
        <button className="SearchForm__button" type='submit'>Искать</button>
      </form>
    </section>
  )
};

export default SearchForm;