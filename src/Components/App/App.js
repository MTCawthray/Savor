import { Route } from 'react-router-dom';
import './App.css';
import Search from '../Search/Search';
import DisplayArea from '../DisplayArea/DisplayArea';
require('dotenv').config();

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Savor
        </h1>
      </header>
      <main>
        <Route exact path="/" component={Search}/>
        <Route exact path="/recipes" component={DisplayArea}/>
      </main>
    </div>
  );
}

export default App;
