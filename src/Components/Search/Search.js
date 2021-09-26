import './Search.css';
import React, { useState } from 'react';
import apiCall from '../../utilities';
import searchIcon from '../../Assets/search.png';
import ErrorPage from '../ErrorPage/ErrorPage';

const Search = ({addRecipes}) => {

  const [inputError, setInputError] = useState('')
  const [serverError, setServerError] = useState('');
  const [search, setSearch] = useState('');

  const submitSearch = (e) => {
    e.preventDefault();
    setInputError('');
    setServerError('');
    checkInputErrors();
    apiCall.getRecipes(search)
      .then((data) => checkRecipeExists(data))
      .catch((err) => setServerError(err));
    setSearch('');
  }

  const checkRecipeExists = (query) => { 
    console.log(search)  
    if (!query.hits.length && !inputError) {
      setInputError('Your search yielded no results. Try another!')
    } 
    addRecipes(query.hits)
  }

  const checkInputErrors = () => {
    setInputError('')
    if (search === '') {
      return setInputError('You must enter a recipe query before you submit')
    } 
  }

  return (
    <form>
      <div className="search-container">
        <input 
          type="text" 
          className="search-bar" 
          placeholder="find a recipe"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="submit-btn"
          onClick={submitSearch}
          ><img src={searchIcon} alt="search button" className="search-btn-img"/>
        </button>
      </div>
      { inputError && <ErrorPage message={inputError} /> }
      { serverError && <ErrorPage message={serverError} /> }
      
    </form>
  )
}

export default Search;