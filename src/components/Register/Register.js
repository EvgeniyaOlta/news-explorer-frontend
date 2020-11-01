import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './Register.css'
import * as auth from '../../auth.js';

function Register(props) { 
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
 
  function handleSubmit(e) {
    e.preventDefault();
    
    auth.register(email, password, name).then((res) => {
      console.log(res)
      if(res.data){
        setEmail('');
        setPassword('');
        setName('');
        SVGAnimateTransformElement('');
        props.handleLogin();
        props.changeUserName(res.data.name);
        props.openInfoTooltip();
        console.log('sds', res)
      } 
    })
    .catch((err) => {
      console.log(err)
    });
  }
  return (
    <PopupWithForm name="login" title="Регистраци" isOpen={props.isOpen} closePopup={props.closePopup}>  
      <label htmlFor="email" className="popup__label">Email
          <input type="email" className="popup__input" placeholder="Введите почту" id="reg-email" name="email" />
          <span className="popup__input-error"></span>
      </label>
      <label htmlFor="password" className="popup__label">Пароль
          <input type="password" className="popup__input" placeholder="Введите пароль" id="reg-password" name="password" required minLength="8" maxLength="20" />
          <span className="popup__input-error">текст ошибки</span>
      </label>
      <label htmlFor="name" className="popup__label">Имя
          <input type="text" className="popup__input" placeholder="Введите свое имя" id="name" name="name" required minLength="2" maxLength="20" />
          <span className="popup__input-error">текст ошибки</span>
      </label>
      <button type="submit" className="popup__save-button popup__save-button_active" onClick={handleSubmit}>Зарегистрироваться</button> 
      <p className="popup__link-line">или <button className="popup__link" onClick={props.openLogin}>Войти</button></p>
    </PopupWithForm> 
  );
}

export default Register;
