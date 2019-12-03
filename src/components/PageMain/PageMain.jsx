import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import home from "../../views/home/home";
import about from "../../views/about/about";
import "./style/pageMain.scss";

export default class PageMain extends Component {
  render() {
    return (
      <div className="pageMain" id="main">
        <Route exact path='/' component={home}></Route>
        <Route exact path='/home' component={home}></Route>
        <Route exact path='/about' component={about}></Route>
      </div>
    )
  }
}



