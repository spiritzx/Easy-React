import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// 引入浏览器访问历史
// import { location } from 'react-router-dom';
import './style/header.scss';
// import img from "../../assets/imgs/logo192.png";import img from "../../assets/imgs/logo192.png";
// let img = require("../../assets/imgs/logo192.png");

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div className="top-nav">
        <div className="nav-icon">
          <img src={require("../../assets/imgs/logo192.png")} alt="logo" className="App-logo"/>
        </div>
        <div className="nav-main">
          <NavLink to="/home" className="a-tag">首页</NavLink>
          <NavLink to="/about" className="a-tag">关于</NavLink>
          <NavLink to="/detail" className="a-tag">详情</NavLink>
        </div>
      </div>
    );
  }
}