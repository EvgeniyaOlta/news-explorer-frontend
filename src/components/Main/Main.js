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
  const [preloaderActive, setPreloaderActive] = React.useState(false);
  const [notFoundActive, setNotFoundActive] = React.useState(false);
  const [searchError, setSearchError] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState('');
  const [pageName, setPageName] = React.useState('main');

  return (
    <main className="main">
      <SearchForm 
      setSearchResultArray={props.setSearchResultArray} 
      setPreloaderActive={setPreloaderActive} 
      setNotFoundActive={setNotFoundActive}
      setSearchError={setSearchError}
      searchInput={searchInput}
      setSearchInput={setSearchInput}/>
      {preloaderActive && 
      <Preloader />
      }
      {notFoundActive && 
      <NotFound />
      }
      {props.searchResultArray !== '' &&
      <SearchResult 
      searchResultArray={props.searchResultArray} 
      searchError={searchError} 
      loggedIn={props.loggedIn}
      setSavedNewsArray={props.setSavedNewsArray}
      savedNewsArray={props.savedNewsArray}
      searchInput={searchInput}
      pageName={pageName}/>
      }
      <About />
      <Login
      isOpen={props.isLoginPopupOpen}
      closePopup={props.closeAllPopups} 
      openRegister={props.handleRegisterPopupClick}
      handleLogin={props.handleLogin}
      setCurrentUser={props.setCurrentUser}/>
      <Register 
      isOpen={props.isRegisterPopupOpen}
      closePopup={props.closeAllPopups}
      openLogin={props.handleLoginPopupClick}
      openInfoTooltip={props.handleInfoTooltipClick}
      handleLogin={props.handleLogin}
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
