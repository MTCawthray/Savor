import './DisplayArea.css';
import selected from '../../Assets/selected.png';
import unselected from '../../Assets/unselected.png';
import ErrorPage from '../ErrorPage/ErrorPage';
const { v4: uuidv4 } = require('uuid');

const DisplayArea = ({ favorites, recipes, handleFavorites }) => {


  const toggleFavorite = (e) => {
    e.preventDefault();
    const fav = recipes.find(recipe => {
      return recipe.recipe.label === e.target.closest('article').id
    })
    handleFavorites(fav);
  }

  const cards = recipes.map(recipe => {

    return (
      <article 
        className="recipe-card"
        key={uuidv4()}
        id={recipe.recipe.label}
        >
        <a 
          href={recipe.recipe.url}
          target="_blank"
          rel="noopener noreferrer">
          <div className="name-and-img-container">
            <img src={recipe.recipe.image} alt={recipe.recipe.label} className="card-img"/>
            <h2>{recipe.recipe.label}</h2>
          </div>
        </a>
        <div className="card-bottom">
          <div className="detail-container">
            <h3>cuisine: {recipe.recipe.cuisineType}</h3>
            <h3>calories: {recipe.recipe.calories.toFixed()}</h3>
            <h3>makes {recipe.recipe.yield} servings</h3>
          </div>
          {(favorites.includes(recipe)) ? (
          <img 
            src={selected} 
            alt="in favorites" 
            className="favorite-toggle" 
            onClick={toggleFavorite} />
        ) :
        (
          <img 
            src={unselected} 
            alt="add to favorites" 
            className="favorite-toggle" 
            onClick={toggleFavorite} />
        )}
        </div>
      </article>
        
    )
  })
  return (
    <section className="display-section">
    
      {!cards.length ? <ErrorPage message={"You don't have any recipes saved yet. Go find some that you like!"} /> : cards}
    </section>
  )
}

export default DisplayArea;