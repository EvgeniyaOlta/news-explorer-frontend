import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './Login.css'

function Login(props) { 

  function handleSubmit(e) {
    e.preventDefault();
    props.closePopup()
  }

  return (
    <PopupWithForm name="login" title="Вход" isOpen={props.isOpen} closePopup={props.closePopup}>  
      <label htmlFor="email" className="popup__label">Email
          <input type="email" className="popup__input" placeholder="Введите почту" id="log-email" name="email" />
          <span className="popup__input-error"></span>
      </label>
      <label htmlFor="password" className="popup__label">Пароль
          <input type="password" className="popup__input" placeholder="Введите пароль" id="log-password" name="password" required minLength="8" maxLength="20" />
          <span className="popup__input-error">текст ошибки</span>
      </label>
      <button type="submit" className="popup__save-button popup__save-button_active " onClick={handleSubmit}>Войти</button> 
      <p className="popup__link-line">или <button className="popup__link" onClick={props.openRegister}>Зарегистрироваться</button></p>
    </PopupWithForm> 
  );
}

export default Login;
