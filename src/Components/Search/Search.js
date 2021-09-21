import './Search.css';

const Search = () => {

  return (
    <form>
      <input 
        type="text" 
        className="search-bar" 
        defaultValue="find a recipe"
      />
      <button>Search Recipes</button>
    </form>
  )
}

export default Search;