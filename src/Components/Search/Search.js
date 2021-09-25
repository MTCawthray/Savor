import './Search.css';
import React, { useState } from 'react';
import apiCall from '../../utilities';
import searchIcon from '../../Assets/search.png';

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
      
    </form>
  )
}

export default Search;