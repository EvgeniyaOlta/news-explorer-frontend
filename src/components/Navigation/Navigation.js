import React from 'react';
import './Navigation.css';
import { MainPageContext } from '../context/MainPageContext.js';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
  const mainPage = React.useContext(MainPageContext);

  return (
    <section className="navigation"> 
      <NavLink to="/" className="navigation__button navigation__button_main" activeClassName="navigation__button_active-main" style={{ color: `${mainPage ? 'white' : 'black'}`}} onClick={props.mainPageChange}>Главная</NavLink>
      <NavLink to="saved-news" className="navigation__button navigation__button_saved" activeClassName="navigation__button_active-saved" style={{ color: `${mainPage ? 'white' : 'black'}`}} onClick={props.savedPageChange} >Сохраненные статьи</NavLink>
      {mainPage && (
        <button className="navigation__button navigation__button_auth" onClick={props.handleLoginPopupClick} style={{ color: `${mainPage ? 'white' : 'black'}`}} >Авторизоваться</button>
      )}
      {mainPage === false && (
        <button className="navigation__button navigation__button_auth" style={{ color: `${mainPage ? 'white' : 'black'}`, borderBottomColor: `${mainPage ? 'rgba(255,255,255)' : 'rgba(0,0,0)'}`}}>Грета <div className="navigation__exite-icon"></div></button>
      )}
      
    </section>
  )
};

export default Navigation;

