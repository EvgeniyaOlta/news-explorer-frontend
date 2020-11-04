import React from 'react';
import './SearchForm.css';
import {newsApi} from '../../utils/NewsApi.js';

function SearchForm(props) {
  const [searchInput, setSearchInput] = React.useState('');
  const [searchInputError, setSearchInputError] = React.useState({
    classError: '',
    errorMessage: '',
  });
  
  const [isSearchInputValid, setIsSearchInputValid] = React.useState(false);
  
  React.useEffect(() => {
    setSearchInputError({
      classError: '',
      errorMessage: '',
    });
    setSearchInput('');
    setIsSearchInputValid(false);
  }, []);

  function handleSearchInputChange(e) {
    setSearchInput(e.target.value);

    if (!e.target.validity.valid) {
      setIsSearchInputValid(false);
    } else {
      setIsSearchInputValid(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!isSearchInputValid) {
      setSearchInputError({
        classError: 'search-form__input-error_active',
        errorMessage: 'Нужно ввести ключевое слово',
      });
    } else {
      setSearchInputError({
        classError: '',
        errorMessage: '',
      });
      props.setSearchResultData('')
      props.setNotFoundActive(false);
      props.setSearchError(false)
      props.setPreloaderActive(true);

      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      const currentDate = `${year}-${month + 1}-${day}`
    
      const from = date.setDate(date.getDate() - 7);
      const fromYear = date.getFullYear();
      const fromMonth = date.getMonth();
      const fromDay = date.getDate();
      const weekAgoDate = `${fromYear}-${fromMonth + 1}-${fromDay}`;
      
      localStorage.setItem('user', JSON.stringify());

      newsApi.getRequest(searchInput, currentDate, weekAgoDate)
        .then((data) => {
          if (data.articles.length === 0) {
            props.setNotFoundActive(true)
            } else { 
            props.setSearchResultData(data.articles);
            localStorage.setItem('searchResultData', JSON.stringify(data.articles));
            }
        })
        .catch(() => {
          console.error('Что-то пошло не так.');
          props.setSearchError(true);
        })
        .finally(() => { 
          props.setPreloaderActive(false) 
        }); 
    }
  }

  return (
    <section className="search-form">
      <h1 className="search-form__title">Что творится в мире?</h1>
      <p className="search-form__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <form className="search-form__search-block">
        <input 
        className="search-form__input" 
        type='text' 
        minLength="2" 
        maxLength="30" 
        placeholder='Введите тему новости' 
        onChange={handleSearchInputChange} />
        <span className={`search-form__input-error ${searchInputError.classError}`}>{searchInputError.errorMessage}</span>
        <button className="search-form__button" type='submit'
        onClick={handleSubmit}
        >Искать</button>
      </form>
    </section>
  )
};

export default SearchForm;