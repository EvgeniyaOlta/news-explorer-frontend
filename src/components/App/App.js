import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews'
import './App.css';
import { MainPageContext } from '../context/MainPageContext.js';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [mainPage, setMainPage] = React.useState(true);

  const [isInfoTooltipOkOpen, setIsInfoTooltipOkOpen] = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);

  function handleLoginPopupClick(e) {
    e.preventDefault();
    closeAllPopups();
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
    setIsInfoTooltipOkOpen(false)
  }

  function mainPageChange () {
    setMainPage(true);
  }
  function savedPageChange () {
    setMainPage(false);
  }

  return (
    <div className="root">
      <MainPageContext.Provider value={mainPage}> 
      <Header 
      handleLoginPopupClick={handleLoginPopupClick}
      mainPageChange={mainPageChange}
      savedPageChange={savedPageChange}/>
        <Switch>
          <Route exact path="/"> 
            <Main
            isInfoTooltipOkOpen={isInfoTooltipOkOpen}
            isLoginPopupOpen={isLoginPopupOpen}
            handleLoginPopupClick={handleLoginPopupClick}
            isRegisterPopupOpen={isRegisterPopupOpen}
            handleRegisterPopupClick={handleRegisterPopupClick}
            handleInfoTooltipClick={handleInfoTooltipClick}
            closeAllPopups={closeAllPopups}/>
          </Route>
          <Route path="/saved-news">
            <SavedNews />
          </Route>
        </Switch>
      <Footer />
      </MainPageContext.Provider>
    </div>
  )
};

export default App;



