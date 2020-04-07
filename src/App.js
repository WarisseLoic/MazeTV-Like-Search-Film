import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import HEADER from "./components/header/header"
import INFO from "./components/info/info"
import HOME from "./components/home/home"
import FOOTER from "./components/footer/footer"
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/info">
              <HEADER />
              <INFO />
              <FOOTER />
            </Route>
            <Route path="/">
              <HEADER />
              <HOME />
              <FOOTER />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
