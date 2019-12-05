import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import home from "./views/home/home";
import about from "./views/about/about";
import detail from "./views/Detail/Detail";
import DetailChild1 from "./views/Detail/DetailChild1/DetailChild1";

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
  },
  {
    path: "/detail",
    compoent: detail,
    exact: false, // 开启严格匹配模式
    childer: [
      {
        path: "/detail/detailChild1",
        compoent: DetailChild1,
        exact: true, // 开启严格匹配模式
      }
    ]
  }
]

class RourerComp extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    console.log(this.props);
  }
  componentDidUpdate() {
    console.log(this.props);
  }
  render() {
    return (
        routerArr.map((val, key) => {
          if (val.childer && val.childer.length) {
            return (
              <Route
                key={key}
                exact={val.exact}
                path={val.path}
                render = {props => {
                  return <DetailChild1 path="/detail/detailChild1" {...props}></DetailChild1>
                }}
              >
              </Route>
            )
          } else {
            return (
              <Route
                key={key}
                exact={val.exact}
                path={val.path}
                component={val.compoent}
              >
              </Route>
            )
          }
            
          
        })
    )
  }
}

export default withRouter(RourerComp)

