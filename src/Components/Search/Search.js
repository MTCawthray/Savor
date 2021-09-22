import './Search.css';

const Search = () => {

  return (
    <form>
      <input 
        type="text" 
        className="search-bar" 
        placeholder="find a recipe"
      />
      <button>Search Recipes</button>
    </form>
  )
}

export default Search;