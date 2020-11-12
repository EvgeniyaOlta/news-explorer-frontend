import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import { MainPageContext } from '../../context/MainPageContext.js';

function Header(props) {
  const mainPage = React.useContext(MainPageContext);

  return (
    <div className="header" style={{ outline: `${mainPage || props.isMenuOpen ? '1px solid white' : '1px solid black'}`}}>
      <h1 className="header__title" style={{ color: `${mainPage || props.isMenuOpen ? 'white' : 'black'}` }}>NewsExplorer</h1>
      <Navigation
      handleLoginPopupClick={props.handleLoginPopupClick}
      mainPageChange={props.mainPageChange}
      savedPageChange={props.savedPageChange}
      isMenuOpen={props.isMenuOpen}
      closeMenu={props.closeMenu}
      openMenu={props.openMenu}
      isLoginPopupOpen={props.isLoginPopupOpen}
      isRegisterPopupOpen={props.isRegisterPopupOpen}
      loggedIn={props.loggedIn}
      handleLogout={props.handleLogout}
      setCurrentUser={props.setCurrentUser}
      />
    </div>
  )
};

export default Header;