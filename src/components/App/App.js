import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews'
import './App.css';

import { Route, Switch } from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom'; 

function App() {
  //const history = useHistory();

  return (
    <div className="root">
      <Header />
        <Switch>
          <Route exact path="/"> 
            <Main />
          </Route>
          <Route path="/saved-news">
            <SavedNews />
          </Route>
        </Switch>
      <Footer />
    </div>
  )
};

export default App;