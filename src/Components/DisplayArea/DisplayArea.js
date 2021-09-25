import './DisplayArea.css';
const { v4: uuidv4 } = require('uuid');

const DisplayArea = ({ recipes }) => {

  const cards = recipes.map(recipe => {

    return (
      <article 
        className="recipe-card"
        key={uuidv4()}>
        <a 
          href={recipe.recipe.url}
          target="_blank"
          rel="noopener noreferrer">
          <div className="name-and-img-container">
            <img src={recipe.recipe.image} alt={recipe.recipe.label} className="card-img"/>
            <h2>{recipe.recipe.label}</h2>
          </div>
        </a>
        <div className="detail-container">
          <h3>cuisine: {recipe.recipe.cuisineType}</h3>
          <h3>calories: {recipe.recipe.calories.toFixed()}</h3>
          <h3>makes {recipe.recipe.yield} servings</h3>
        </div>
      </article>
    )
  })
  return (
    <section className="display-section">
      {cards}
    </section>
  )
}

export default DisplayArea;