import { Route, Switch, Redirect, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import Search from '../Search/Search';
import DisplayArea from '../DisplayArea/DisplayArea';

const App = () => {

  const [recipes, setRecipes] = useState([]);

  const addRecipes = (data) => {
    setRecipes(data)
  }

  const clearRecipes = () => {
    setRecipes('');
  }

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
              recipes={recipes}
            />
          }}
          />
        </Switch> 
      </main>
    </div>
  );
}

export default App;
