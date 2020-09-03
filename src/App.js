import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home'
import Memes from './Memes'
import Automation from './Automation'
import Google from './Google'
import Jobs from './Jobs'
import CSS from './CSS'
import CoderLogic from './CoderLogic'
import General from './General'
import Memer from './Memer';


class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="main-div">
          <h1>Coding Memes</h1>
            <nav className="side">
              <Link to="/memes" className="side-links">All Memes</Link>
              <Link to="/automation" className="side-links">Automation Memes</Link>
              <Link to="/google" className="side-links">Google Memes</Link>
              <Link to="/jobs" className="side-links">Job Memes</Link>
              <Link to="/css" className="side-links">CSS Memes</Link>
              <Link to="/coder_logic" className="side-links">Coder Logic Memes</Link>
              <Link to="/general" className="side-links">General Memes</Link>
              <Link to="/memer" className="side-links">Meme Generator</Link>
            </nav>

          <Switch>
            <Route path="/memes">
              <Memes />
            </Route>
            <Route path="/automation">
              <Automation />
            </Route>
            <Route path="/google">
              <Google />
            </Route>
            <Route path="/jobs">
              <Jobs />
            </Route>
            <Route path="/css">
              <CSS />
            </Route>
            <Route path="/coder_logic">
              <CoderLogic />
            </Route>
            <Route path="/general">
              <General />
            </Route>
            <Route path="/memer">
              <Memer />
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