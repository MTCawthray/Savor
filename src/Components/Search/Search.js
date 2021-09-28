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
    setServerError('');
    setInputError('');
    if (checkInputErrors()){
      return
    } else {
      apiCall.getRecipes(search)
      .then((data) => checkRecipeExists(data))
      .catch((e) => setServerError(`${e.message} Error: cannot access server`));
      setSearch('');
    }
  }

  const checkRecipeExists = (query) => { 
    if (!query.hits.length && !inputError) {
      setInputError('Your search yielded no results. Try another!')
    } 
    addRecipes(query.hits)
  }

  const checkInputErrors = () => {
    setInputError('')
    if (search === '') {
      setInputError('You must enter a recipe query before you submit')
      return true;
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