import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './Register.css'
import * as auth from '../../auth.js';

function Register(props) { 
  const [submitError, setSubmitError] = React.useState('');

  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState({
    classError: '',
    errorMessage: '',
  });

  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState({
    classError: '',
    errorMessage: '',
  });
  
  const [name, setName] = React.useState('');
  const [nameError, setNameError] = React.useState({
    classError: '',
    errorMessage: '',
  });
  
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [isPasswordValid, setIsPasswordValid] = React.useState(false);
  const [isNameValid, setIsNameValid] = React.useState(false);
  const [isFormValid, setIsFormValid] = React.useState(false);
  

  React.useEffect(() => {
    if (isEmailValid && isPasswordValid && isNameValid) setIsFormValid(true);

    return () => {
      setIsFormValid(false);
    };
  }, [isEmailValid, isPasswordValid, isNameValid]);
 

  React.useEffect(() => {
    setEmailError({
      classError: '',
      errorMessage: '',
    });
    setPasswordError({
      classError: '',
      errorMessage: '',
    });
    setNameError({
      classError: '',
      errorMessage: '',
    });
    setEmail('');
    setPassword('');
    setName('');
    setIsEmailValid(false);
    setIsPasswordValid(false);
    setIsNameValid(false);
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

  function handleNameChange(evt) {
    setName(evt.target.value);

    if (!evt.target.validity.valid) {
      setNameError({
        classError: 'popup__input-error_active',
        errorMessage: evt.target.validationMessage,
      });
      setIsNameValid(false);
    } else {
      setNameError({
        classError: '',
        errorMessage: '',
      });
      setIsNameValid(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    auth.register(email, password, name).then((res) => {
      if(res.data){
        setEmail('');
        setPassword('');
        setName('');
        props.openInfoTooltip();
      } 
      })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <PopupWithForm name="login" title="Регистраци" isOpen={props.isOpen} closePopup={props.closePopup}>  
      <label htmlFor="email" className="popup__label">Email
          <input className="popup__input" 
          placeholder="Введите почту" 
          id="email" 
          name="email" 
          type="email"
          pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
          required
          onChange={handleEmailChange}/>
          <span className={`popup__input-error ${emailError.classError}`} >{emailError.errorMessage}</span>
      </label>
      <label htmlFor="password" className="popup__label">Пароль
          <input className="popup__input" 
          placeholder="Введите пароль" 
          id="password" name="password" 
          type="password" 
          minLength="8" 
          maxLength="20" 
          required 
          onChange={handlePasswordChange} />
          <span className={`popup__input-error ${passwordError.classError}`} >{passwordError.errorMessage}</span>
      </label>
      <label htmlFor="name" className="popup__label">Имя
          <input 
          className="popup__input" 
          placeholder="Введите свое имя" 
          id="name" name="name" 
          type="text" 
          minLength="2" 
          maxLength="20" 
          pattern="[a-zA-Zа-яА-Я\s\-]+" 
          required 
          onChange={handleNameChange} />
          <span className={`popup__input-error ${nameError.classError}`} >{nameError.errorMessage}</span>
      </label>
      <span className="popup__submit-error" >{submitError}</span>
      <button 
      type="submit" 
      className={`popup__save-button ${isFormValid && "popup__save-button_active"}`} 
      onClick={handleSubmit}
      disabled={!isFormValid && "disabled"}>Зарегистрироваться</button> 
      <p className="popup__link-line">или <button className="popup__link" onClick={props.openLogin}>Войти</button></p>
    </PopupWithForm> 
  );
}

export default Register;
