import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchResult from '../SearchResult/SearchResult';
import About from '../About/About';
import './Main.css';


function Main() {
  return (
    <main className="Main">
      <SearchForm />
      <SearchResult />
      <About />
    </main>
  )
};

export default Main;
