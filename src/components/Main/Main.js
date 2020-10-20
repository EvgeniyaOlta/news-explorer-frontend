import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import './Main.css';

function Main() {
  return (
    <main className="Main">
      <SearchForm />
      <NewsCardList />
      <About />
    </main>
  )
};

export default Main;
