import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import Memes from './Memes'
import Postmeme from './Postmeme'
import Mymemes from './Mymemes'



class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="main-div">

            <nav className="side">
              <Link to="/memes" className="side-links">All Memes</Link>
            </nav>

          <Switch>
            <Route path="/memes">
               <Memes />
             </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;