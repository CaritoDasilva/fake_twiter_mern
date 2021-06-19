import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './views/Home';
import NewTweetForm from './views/NewTweet';
import DetailTweet from './views/DetailTweet';
import Login from './views/Login';

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
            <li>
              <Link to="/details/:id">Ver Tweet</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>        
        <Switch>         
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/new">
            <NewTweetForm/>
          </Route>
          <Route exact path="/details/:id">
            <DetailTweet/>
          </Route>
          <Route exact path="/new/:id">
            <NewTweetForm/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
