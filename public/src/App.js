import React, {Component} from "react";
import logo from './avatar.png';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StartPage from './startpage';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Hi! I'm Isabella. Welcome to my story.
            </p>
            <Router>
            <Link to="./startpage">Start</Link>
            <Route path="./startpage" component={StartPage} />
            </Router>
          </header>
        </div>
    );
  }
}

export default App;
