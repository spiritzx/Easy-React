/*
 * @Descripttion: react 主节点
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-05-27 10:46:56
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-04 22:20:45
 */ 
import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import * as serviceWorker from "./serviceWorker";
import App from "./router/index";
import store from "./redux/store";
import { Provider } from "react-redux";
import './mock/test'

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(
  <Root></Root>, 
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
