import React, { Component } from 'react';
import {  BrowserRouter as Router } from 'react-router-dom';

// 引入头部组件
import Header from "../../components/header/header";
// 引入页面中间部分
import PageMain from "../../components/PageMain/PageMain";
// 引入底部组件
import Footer from "../../components/footer/footer";
import "./style/TMF.scss";

export default class TMF extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <div className="page-main">
            <PageMain></PageMain>
          </div>
          <Footer/>
        </div>
      </Router>
    )
  }
}

