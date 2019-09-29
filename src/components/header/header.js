import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {logo} from "./logo.svg";
export default class Header extends Component {
  render() {
    return (
      <div className="top-nav">
        <div className="nav-icon">
          <img src={logo} alt="logo" className="App-logo"/>
        </div>
        <div className="nav-main">
          <Link to="/home">首页</Link>
          <Link to="/about">关于</Link>
        </div>
      </div>
    );
  }
}