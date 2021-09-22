import { Route } from 'react-router-dom';
import './App.css';
import Search from '../Search/Search';
import DisplayArea from '../DisplayArea/DisplayArea';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Savor
        </h1>
      </header>
      <main>
        <Route exact path="/" render={ ({ match }) => {
          return <Search />
          }
        }/>
        <Route exact path="/:recipeID" render={ ({ match }) => {
          return <DisplayArea />
          }
        }/>
      </main>
    </div>
  );
}

export default App;
