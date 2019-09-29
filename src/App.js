import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import home from "./views/home/home";
import about from "./views/about/about";
import Header from "./components/header/header";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <Route exact path='/' component={home}></Route>
          <Route exact path='/home' component={home}></Route>
          <Route exact path='/about' component={about}></Route>
        </div>
      </Router>
    )
  }
}

export default App;
