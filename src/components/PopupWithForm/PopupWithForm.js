import React from 'react';
import { Link } from 'react-router-dom';
import './PopupWithForm.css'

function PopupWithForm(props) {
  return (
    <section className={`PopupWithForm ${props.isOpen && "PopupWithForm_opened"}`} id=''>
      <form className="PopupWithForm__container"  method="POST" action="#" id="PopupWithForm">
        <button className="PopupWithForm__close-button" type="reset" aria-label="Закрыть" id="closeAllPopups"></button>
        <h1 className="PopupWithForm__text">{'Вход' || 'Регистрация'}</h1>
        <label for="email" className="PopupWithForm__label">Email
          <input type="text" className="PopupWithForm__input" value={props.email} placeholder="Введите почту" id="email" name="email" />
          <span className="PopupWithForm__error">{'текст ошибки' || ' '}</span>
        </label>
        <label for="pass" className="PopupWithForm__label">Пароль
          <input type="password" className="PopupWithForm__input" value={props.password} placeholder="Введите пароль" id="pass" name="pass" />
          <span className="PopupWithForm__error">{'текст ошибки' || ' '}</span>
        </label>
        <label for="name" className="PopupWithForm__label">Имя
          <input type="name" className="PopupWithForm__input" placeholder="Введите своё имя" id="name" name="name" />
        </label>
        <span className="PopupWithForm__error PopupWithForm__error_conflict">{'текст ошибки' || ' '}</span>
        <button type="submit" className="PopupWithForm__submit">{'Войти' || 'Зарегистрироваться'}</button>
        <p className="PopupWithForm__subsidiary-text">или
          <Link to="/signup" className="PopupWithForm__link">{'Войти' || 'Зарегистрироваться'}</Link>
        </p>
      </form>
    </section>
  );
}

export default PopupWithForm