import React from 'react';
import './Navigation.css';
import { MainPageContext } from '../context/MainPageContext.js';
import { NavLink } from 'react-router-dom';
import menuBlack from '../../images/menu-black.svg'
import menuWhite from '../../images/menu-white.svg'

function Navigation(props) {

  const mainPage = React.useContext(MainPageContext);


  return (
    <section className={`navigation ${props.isMenuOpen && "navigation_opened-menu"}`}> 
      <NavLink 
      to="/" 
      className={`navigation__button navigation__button_main ${props.isMenuOpen && "navigation__button_opened-menu"}`} 
      activeClassName="navigation__button_active-main" style={{ color: `${mainPage || props.isMenuOpen ? 'white' : 'black'}`}} 
      onClick={props.mainPageChange}>Главная</NavLink>
      <NavLink 
      to="saved-news" 
      className={`navigation__button navigation__button_saved ${props.isMenuOpen && "navigation__button_opened-menu"}`} 
      activeClassName="navigation__button_active-saved" style={{ color: `${mainPage || props.isMenuOpen ? 'white' : 'black'}`}} 
      onClick={props.savedPageChange} >Сохраненные статьи</NavLink>
      {mainPage && (
        <button className={`navigation__button navigation__button_auth ${props.isMenuOpen && "navigation__button_auth_opened-menu"}`} 
        onClick={props.handleLoginPopupClick} style={{ color: `${mainPage ? 'white' : 'black'}`}} >Авторизоваться</button>
      )}
      {mainPage === false && (
        <button style={{ color: `${mainPage || props.isMenuOpen ? 'white' : 'black'}`,  borderBottomColor: `${mainPage || props.isMenuOpen ? 'rgba(255,255,255)' : 'rgba(0,0,0)'}`}} 
        className={`navigation__button navigation__button_auth ${props.isMenuOpen && "navigation__button_auth_opened-menu"}`} >Грета <div className="navigation__exite-icon"></div></button>
      )}
       <button className={`navigation__icon-menu ${props.isMenuOpen && "navigation__icon-menu_opened-menu"} ${props.isLoginPopupOpen || props.isRegisterPopupOpen ? "navigation__icon-menu_hidden" : ""}`}  style={{ backgroundImage: `url(${mainPage ? menuWhite : menuBlack })` }} onClick={props.openMenu}></button>
      
      <button className={`navigation__close-button ${props.isMenuOpen && "navigation__close-button_opened-menu"}`} onClick={props.closeMenu}></button>
    </section>
  )
};

export default Navigation;