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
    checkInputErrors();
    apiCall.getRecipes(search)
      .then((data) => checkRecipeExists(data))
      .catch((err) => setServerError(err));
    setSearch('');
  }

  const checkRecipeExists = (search) => {   
    if (!search.hits.length) {
      setInputError('Your search yielded no results. Try another!')
    } 
    addRecipes(search.hits)
  }

  const checkInputErrors = () => {
    setInputError('')
    if (search === '') {
      setInputError('You must enter a recipe query before you submit')
    } else if (search === undefined) {
      setInputError('undefined')
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
      { inputError && <ErrorPage message={inputError}/>}
      
    </form>
  )
}

export default Search;