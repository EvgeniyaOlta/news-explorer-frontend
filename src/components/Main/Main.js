import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchResult from '../SearchResult/SearchResult';
//import Preloader from '../Preloader/Preloader';
//import NotFound from '../NotFound/NotFound';
import About from '../About/About';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './Main.css';
import InfoTooltip from '../InfoTooltip/InfoTooltip';



function Main(props) {
  return (
    <main className="main">
      <SearchForm />
      <SearchResult />
      <About />
      <Login
      isOpen={props.isLoginPopupOpen}
      closePopup={props.closeAllPopups} 
      openRegister={props.handleRegisterPopupClick}/>
      <Register 
      isOpen={props.isRegisterPopupOpen}
      closePopup={props.closeAllPopups}
      openLogin={props.handleLoginPopupClick}
      openInfoTooltip={props.handleInfoTooltipClick}
      />
      <InfoTooltip 
      isOpen={props.isInfoTooltipOkOpen}
      closePopup={props.closeAllPopups}
      openLogin={props.handleLoginPopupClick}/>
    </main>
  )
};

export default Main;
