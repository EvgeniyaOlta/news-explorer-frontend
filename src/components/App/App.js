import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews'
import './App.css';
import { MainPageContext } from '../context/MainPageContext.js';
import { Route, Switch, useHistory } from 'react-router-dom';
import * as auth from '../../auth.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js';
//import MainApi from '../utils/MainApi';

function App() {
  const [mainPage, setMainPage] = React.useState(true);

  const [isInfoTooltipOkOpen, setIsInfoTooltipOkOpen] = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const history = useHistory();
  const [userName, setUserName] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);
  //const [userPassword, setUserPassword] = React.useState('');

  //React.useEffect(() => {
  //  MainApi.getUserInfo()
  //  .then((userInfoData) => {
  //    setCurrentUser(userInfoData);
  //  })
  //.catch(() => {
  //    console.error('Что-то пошло не так.');
  //  });
  //}, []);

  function openMenu() {
    setIsMenuOpen(true);
  }
  function closeMenu() {
    setIsMenuOpen(false);
  } 
  
  function handleLoginPopupClick(e) {
    e.preventDefault();
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
    e.preventDefault();
    closeAllPopups();
    setIsInfoTooltipOkOpen(true);
  }

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsInfoTooltipOkOpen(false);
    setIsMenuOpen(false);
    console.log(isMenuOpen)
  }

  function mainPageChange () {
    setMainPage(true);
  }
  function savedPageChange () {
    setMainPage(false);
  }

  function changeUserName(name){
    setUserName(name) 
  };
  function handleLogin(){
    setLoggedIn(true) 
  };
  
  function handleLogout(){
    setLoggedIn(false) 
  };
  React.useEffect(() => {
    tokenCheck ()
  }, []);

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt){
      auth.getContent(jwt).then((res) => {
        console.log(res)
        if (res.data){
          setLoggedIn(true);
          changeUserName(res.data.name);
          history.push('/')
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
      isRegisterPopupOpen={isRegisterPopupOpen}/>
      
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
            changeUserName={changeUserName}
            handleLogin={handleLogin} />
          </Route>
          <Route path="/saved-news">
            <SavedNews />
          </Route>
        </Switch>
      <Footer mainPageChange={mainPageChange}/>
      </CurrentUserContext.Provider>
      </MainPageContext.Provider>
    </div>
  )
};

export default App;



