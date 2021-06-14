import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './views/Home';
import NewTweetForm from './views/NewTweet';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/new">Nuevo tweet</Link>
            </li>
            {/* <li>
              <Link to="/users">Users</Link>
            </li> */}
          </ul>
        </nav>        
        <Switch>         
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/new">
            <NewTweetForm/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
