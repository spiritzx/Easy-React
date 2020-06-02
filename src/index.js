/*
 * @Descripttion: react 主节点
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-05-27 10:46:56
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-06-02 14:44:59
 */ 
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./views/App";
import store from "./redux/store";
import { Provider } from "react-redux";
import './mock/test'

class Index extends Component {
  render() {
    return (
      <Router>
        <App></App>
      </Router>
    )
  }
}

ReactDOM.render(
  <Provider  store={store}>
    <Index />
  </Provider>, 
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
