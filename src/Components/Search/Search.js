import './Search.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import apiCall from '../../utilities';

const Search = (props) => {
  // const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  const submitSearch = (e) => {
    e.preventDefault();
    apiCall.getRecipes(search)
      .then((data) => props.setRecipes(data.hits))
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
      <Link to="/recipes" >
        <button
        onClick={submitSearch}
        >Search Recipes
        </button>
      </Link>
    </form>
  )
}

export default Search;