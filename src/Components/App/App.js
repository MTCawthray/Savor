import { Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Search from '../Search/Search';
import DisplayArea from '../DisplayArea/DisplayArea';
import apiCall from '../../utilities';
require('dotenv').config();

const App = () => {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    apiCall.getRecipes('pasta')
      .then((data) => setRecipes(data.hits))
      .catch((err) => console.log('error from fetch', err))
    console.log(recipes)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Savor
        </h1>
      </header>
      <main>
        <Route exact path="/" component={Search}/>
        <Route exact path="/:recipeID" render={ ({ match }) => {
          return <DisplayArea />
          }
        }/>
      </main>
    </div>
  );
}

export default App;
