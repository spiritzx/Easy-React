import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import home from "../../views/home/home";
import about from "../../views/about/about";
import "./style/pageMain.scss";

// 定义路由
let routerArr = [
  {
    path: "/",
    compoent: home,
    exact: true // 开启严格匹配模式
  },
  {
    path: "/home",
    compoent: home,
    exact: true // 开启严格匹配模式
  },
  {
    path: "/about",
    compoent: about,
    exact: true // 开启严格匹配模式
  }
]

export default class PageMain extends Component {
  render() {
    return (
        routerArr.map((val, key) => {
          return (
            <Route exact path={val.path} component={val.compoent}></Route>
          )
        })
    )
  }
}



