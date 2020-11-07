import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews'
import './App.css';
import { MainPageContext } from '../../context/MainPageContext.js';
import { CurrentUserContext } from '../../context/CurrentUserContext.js';
import * as auth from '../../auth.js';
import mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'; 

function App() {
  const [mainPage, setMainPage] = React.useState(true);

  const [isInfoTooltipOkOpen, setIsInfoTooltipOkOpen] = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [savedNewsArray, setSavedNewsArray] = React.useState('');
  const [searchResultArray, setSearchResultArray] = React.useState('');
  const [redirect, setRedirect] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState('');

  React.useEffect(() => {
    if (!loggedIn){
      setCurrentUser(null)
    }
    else{ 
    mainApi.getUserInfo()
    .then((userInfoData) => {
      setCurrentUser(userInfoData.data);
    })
    .catch(() => {
      console.error('Что-то пошло не так.');
    });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    if (!loggedIn){
      setSavedNewsArray('');
    }
    else{mainApi.getInitialCards()
      .then(cardsInfoData => {
        setSavedNewsArray(cardsInfoData.data);
      })
      .catch(() => {
        console.error('Что-то пошло не так.');
      }); 
    }
  }, [loggedIn, savedNewsArray]);
  
  function openMenu() {
    setIsMenuOpen(true);
  }
  function closeMenu() {
    setIsMenuOpen(false);
  } 
  
  function handleLoginPopupClick(e) {
    closeAllPopups();
    closeMenu();
    setIsLoginPopupOpen(true);
  }
  
  function handleRegisterPopupClick(e) {
    e.preventDefault();
    closeAllPopups();
    setIsRegisterPopupOpen(true);
  }

  function handleInfoTooltipClick(e) {
    closeAllPopups();
    setIsInfoTooltipOkOpen(true);
  }

  function closeAllPopups() {
    setRedirect(false)
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsInfoTooltipOkOpen(false);
    setIsMenuOpen(false);
  }

  function mainPageChange () {
    setMainPage(true);
  }
  
  function savedPageChange () {
    setMainPage(false);
  }

  function handleLogin(){
    setLoggedIn(true) 
  };
  
  function handleLogout(){
    setLoggedIn(false) 
  };
  
  function deleteArticle (id) {
    mainApi.deleteCard(id).then(() => {
    const newSavedNewsArray = savedNewsArray.filter(function(item) {
      return id !== item._id;
    });
    setSavedNewsArray(newSavedNewsArray);
    });
  }

  React.useEffect(() => {
    tokenCheck ()
  }, []);

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt){
      auth.getContent(jwt).then((res) => {
        if (res.data){
          setLoggedIn(true);
        }
      })
      .catch(err => console.log(err));
    }
  }

  return (
    <div className="root">
      <MainPageContext.Provider value={mainPage}> 
      <CurrentUserContext.Provider value={currentUser}>
      <Header 
      closeMenu={closeMenu}
      openMenu={openMenu}
      isMenuOpen={isMenuOpen}
      handleLoginPopupClick={handleLoginPopupClick}
      mainPageChange={mainPageChange}
      savedPageChange={savedPageChange}
      isInfoTooltipOkOpen={isInfoTooltipOkOpen}
      isLoginPopupOpen={isLoginPopupOpen}
      isRegisterPopupOpen={isRegisterPopupOpen}
      loggedIn={loggedIn}
      handleLogout={handleLogout}
      setLoggedIn={setLoggedIn}
      setCurrentUser={setCurrentUser}
      />
      
        <Switch>
          <Route exact path="/"> 
            <Main
            isInfoTooltipOkOpen={isInfoTooltipOkOpen}
            isLoginPopupOpen={isLoginPopupOpen}
            handleLoginPopupClick={handleLoginPopupClick}
            isRegisterPopupOpen={isRegisterPopupOpen}
            handleRegisterPopupClick={handleRegisterPopupClick}
            handleInfoTooltipClick={handleInfoTooltipClick}
            closeAllPopups={closeAllPopups}
            handleLogin={handleLogin} 
            loggedIn={loggedIn}
            setCurrentUser={setCurrentUser}
            setSavedNewsArray={setSavedNewsArray}
            savedNewsArray={savedNewsArray}
            searchResultArray={searchResultArray}
            setSearchResultArray={setSearchResultArray} 
            setRedirect={setRedirect}
            redirect={redirect}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            deleteArticle={deleteArticle}/>
          </Route>
          <ProtectedRoute 
          exact path="/saved-news" 
          loggedIn={loggedIn} 
          component={SavedNews} 
          savedNewsArray={savedNewsArray} 
          setSearchResultArray={setSearchResultArray}
          handleLogin={handleLogin}
          setRedirect={setRedirect}
          deleteArticle={deleteArticle} />
        </Switch>
      <Footer mainPageChange={mainPageChange}/>
      </CurrentUserContext.Provider>
      </MainPageContext.Provider>
    </div>
  )
};

export default App;



