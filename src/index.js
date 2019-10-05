import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';

import home from "./views/home/home";
import about from "./views/about/about";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <div className="pageMain" id="main">
            <Route exact path='/' component={home}></Route>
            <Route exact path='/home' component={home}></Route>
            <Route exact path='/about' component={about}></Route>
          </div>
          <Footer/>
        </div>
      </Router>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
