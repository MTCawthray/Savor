import { Route, Switch, Redirect, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import Search from '../Search/Search';
import DisplayArea from '../DisplayArea/DisplayArea';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addRecipes = (data) => {
    setRecipes(data)
  }

  const handleFavorites = (newFavorite) => {
    if (!favorites.includes(newFavorite)) {
      setFavorites([...favorites, newFavorite])
    } else {
      const updated = favorites.filter(favorite => favorite !== newFavorite)
      setFavorites(updated);
    }
  }

  const clearRecipes = () => {
    setRecipes('');
  }

  useEffect(() => {
    if (favorites.length) {
      localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    }
  }, [favorites])

  useEffect(() => {
    setRecipes('');
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <Link to="/"
          onClick={clearRecipes}>
            Savor
          </Link>
        </h1>
        <ul>
          <Link to="/favorites">
            My Recipes
          </Link>
          <Link to="/"
          onClick={clearRecipes}>
            search
          </Link>
        </ul>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            {recipes.length ? <Redirect to="/recipes" />: 
            <Search 
              addRecipes={addRecipes}
            /> }
          </Route>
          <Route exact path="/recipes" render={ () => {
            return <DisplayArea 
              favorites={favorites}
              recipes={recipes}
              handleFavorites={handleFavorites}
            />
          }} />
          <Route exact path="/favorites" render={ () => {
            return <DisplayArea 
              favorites={favorites}
              recipes={favorites}
              handleFavorites={handleFavorites}
            />
            }}
          />
        </Switch> 
      </main>
    </div>
  );
}

export default App;
