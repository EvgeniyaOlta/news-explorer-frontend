import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import { MainPageContext } from '../context/MainPageContext.js';

function Header(props) {
  const mainPage = React.useContext(MainPageContext);

  return (
    <div className="header" style={{ borderBottomColor: `${mainPage ? 'rgba(255,255,255)' : 'rgba(0,0,0)'}`}}>
      <h1 className="header__title" style={{ color: `${mainPage ? 'white' : 'black'}`, borderBottomColor: `${mainPage ? 'rgba(255,255,255)' : 'rgba(0,0,0)'}` }}>NewsExplorer</h1>
      <Navigation
      handleLoginPopupClick={props.handleLoginPopupClick}
      mainPageChange={props.mainPageChange}
      savedPageChange={props.savedPageChange}
      />
    </div>
  )
};

export default Header;