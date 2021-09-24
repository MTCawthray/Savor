import './Search.css';
import React, { useState } from 'react';
import apiCall from '../../utilities';

const Search = ({addRecipes}) => {

  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  const submitSearch = (e) => {
    e.preventDefault();
    apiCall.getRecipes(search)
      .then((data) => addRecipes(data.hits))
      .catch((err) => setError(err));
    setSearch('');
  }

  return (
    <form>
      <input 
        type="text" 
        className="search-bar" 
        placeholder="find a recipe"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={submitSearch}
        >search
      </button>
    </form>
  )
}

export default Search;