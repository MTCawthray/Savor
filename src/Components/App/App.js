import { Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Search from '../Search/Search';
import DisplayArea from '../DisplayArea/DisplayArea';
require('dotenv').config();

const App = () => {

  useEffect(() => {
    console.log('key', process.env.REACT_APP_API_KEY)
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
