import './DisplayArea.css';

const DisplayArea = ({ recipes }) => {

  const cards = recipes.map(recipe => {
    console.log(recipe)
    return (
      <article className="recipe-card">
        <a 
          href={recipe.recipe.url}
          target="_blank"
          rel="noopener noreferrer">
          <div className="name-and-img-container">
            <img src={recipe.recipe.image} alt={recipe.recipe.label} className="card-img"/>
            <h2>{recipe.recipe.label}</h2>
          </div>
        </a>
        <h3>cuisine: {recipe.recipe.cuisineType}</h3>
        <h3>calories: {recipe.recipe.calories.toFixed()}</h3>
        <h3>makes {recipe.recipe.yield} servings</h3>
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