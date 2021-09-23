import './DisplayArea.css';

const DisplayArea = ({ recipes }) => {

  const cards = recipes.map(recipe => {
    console.log(recipe)
    return (
      <article className="recipe-card">
        <a href={recipe.recipe.url}>
          <div className="name-and-img-container">
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} className="card-img"/>
          </div>
        </a>
        <h3>cuisine: {recipe.recipe.cuisineType}</h3>
        <h3>calories: {recipe.recipe.calories}</h3>
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