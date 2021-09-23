import './Search.css';
import React, { useState } from 'react';
import apiCall from '../../utilities';

const Search = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  const submitSearch = (e) => {
    e.preventDefault();
    apiCall.getRecipes(search)
      .then((data) => setRecipes(data.hits))
      .catch((err) => setError(err))

  }

  return (
    <form>
      <input 
        type="text" 
        className="search-bar" 
        placeholder="find a recipe"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
      onClick={submitSearch}
      >Search Recipes
      </button>
    </form>
  )
}

export default Search;