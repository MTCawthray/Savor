import { Route, Switch, Redirect } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Search from '../Search/Search';
import DisplayArea from '../DisplayArea/DisplayArea';
// require('dotenv').config();

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const addRecipes = (data) => {
    setRecipes(data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Savor
        </h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
          {recipes.length && <Redirect to="/recipes" />}
          <Search 
            addRecipes={addRecipes}
          />
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
