import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './Login.css'
import * as auth from '../../auth.js';
import { CurrentUserContext } from '../../context/CurrentUserContext.js';

function Login(props) { 

  const currentUser = React.useContext(CurrentUserContext);

  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState({
    classInput: '',
    classError: '',
    errorMessage: '',
  });

  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState({
    classInput: '',
    classError: '',
    errorMessage: '',
  });
  
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [isPasswordValid, setIsPasswordValid] = React.useState(false);
  const [isFormValid, setIsFormValid] = React.useState(false);
  

  React.useEffect(() => {
    if (isEmailValid && isPasswordValid) setIsFormValid(true);

    return () => {
      setIsFormValid(false);
    };
  }, [isEmailValid, isPasswordValid]);
 

  React.useEffect(() => {
    setEmailError({
      classInput: '',
      classError: '',
      errorMessage: '',
    });
    setPasswordError({
      classInput: '',
      classError: '',
      errorMessage: '',
    });
    setEmail('');
    setPassword('');
    setIsEmailValid(false);
    setIsPasswordValid(false);
  }, [props.isOpen]);

  function handleEmailChange(e) {
    setEmail(e.target.value);

    if (!e.target.validity.valid) {
      setEmailError({
        classError: 'popup__input-error_active',
        errorMessage: e.target.validationMessage,
      });
      setIsEmailValid(false);
    } else {
      setEmailError({
        classError: '',
        errorMessage: '',
      });
      setIsEmailValid(true);
    }
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);

    if (!e.target.validity.valid) {
      setPasswordError({
        classError: 'popup__input-error_active',
        errorMessage: e.target.validationMessage,
      });
      setIsPasswordValid(false);
    } else {
      setPasswordError({
        classError: '',
        errorMessage: '',
      });
      setIsPasswordValid(true);
    }
  }


  function handleSubmit (e) {
    e.preventDefault();
    if (!email || !password){
      return;
    }  
    auth.authorize(email, password).then((data) => {
      if (data){
        setEmail('');
        setPassword('');
        props.setCurrentUser(data);
        props.handleLogin();
        props.closePopup();
        console.log(currentUser)
      } else {
        console.log('error')
      }
    })
    .catch(err => console.log(err)); 
  }


  return (
    <PopupWithForm name="login" title="Вход" isOpen={props.isOpen} closePopup={props.closePopup}>  
      <label htmlFor="email" className="popup__label">Email
          <input
          className="popup__input" 
          placeholder="Введите почту" 
          id="log-email" 
          name="email"
          type="email"
          pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})" 
          required 
          onChange={handleEmailChange}/>
          <span className={`popup__input-error ${emailError.classError}`} >{emailError.errorMessage}</span>
      </label>
      <label htmlFor="password" className="popup__label">Пароль
          <input 
          className="popup__input" 
          placeholder="Введите пароль" 
          id="log-password" 
          name="password" 
          type="password" 
          minLength="8" 
          maxLength="20" 
          required 
          onChange={handlePasswordChange}/>
          <span className={`popup__input-error ${passwordError.classError}`} >{passwordError.errorMessage}</span>
      </label>
      <button 
      type="submit" 
      className={`popup__save-button ${isFormValid && "popup__save-button_active"}`} 
      onClick={handleSubmit}
      disabled={!isFormValid && "disabled"}>Войти</button> 
      <p className="popup__link-line">или <button className="popup__link" onClick={props.openRegister}>Зарегистрироваться</button></p>
    </PopupWithForm> 
  );
}

export default Login;
