import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchResult from '../SearchResult/SearchResult';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import About from '../About/About';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './Main.css';
import InfoTooltip from '../InfoTooltip/InfoTooltip';


function Main(props) {
  const [searchResultData, setSearchResultData] = React.useState('');
  const [preloaderActive, setPreloaderActive] = React.useState(false);
  const [notFoundActive, setNotFoundActive] = React.useState(false);
  const [searchError, setSearchError] = React.useState(false);

  return (
    <main className="main">
      <SearchForm 
      setSearchResultData={setSearchResultData} 
      setPreloaderActive={setPreloaderActive} 
      setNotFoundActive={setNotFoundActive}
      setSearchError={setSearchError}/>
      {preloaderActive && 
      <Preloader />
      }
      {notFoundActive && 
      <NotFound />
      }
      {searchResultData !== '' &&
      <SearchResult 
      searchResultData={searchResultData} 
      searchError={searchError} 
      loggedIn={props.loggedIn}/>
      }
      <About />
      <Login
      isOpen={props.isLoginPopupOpen}
      closePopup={props.closeAllPopups} 
      openRegister={props.handleRegisterPopupClick}
      changeUserName={props.changeUserName}
      handleLogin={props.handleLogin}
      setCurrentUser={props.setCurrentUser}/>
      <Register 
      isOpen={props.isRegisterPopupOpen}
      closePopup={props.closeAllPopups}
      openLogin={props.handleLoginPopupClick}
      openInfoTooltip={props.handleInfoTooltipClick}
      handleLogin={props.handleLogin}
      changeUserName={props.changeUserName}
      setLoggedIn={props.setLoggedIn}
      />
      <InfoTooltip 
      isOpen={props.isInfoTooltipOkOpen}
      closePopup={props.closeAllPopups}
      openLogin={props.handleLoginPopupClick}/>
    </main>
  )
};

export default Main;
