import React, { Component } from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import NotFound from "./views/NotFound/NotFound";
import home from "./views/home/home";
import about from "./views/about/about";
import detail from "./views/Detail/Detail";
import DetailChild1 from "./views/Detail/DetailChild1/DetailChild1";

// 定义路由
let routerArr = [
  {
    type: "redirect",
    from: "/",
    path: "/home",
    exact: true
  },
  {
    name: "home",
    path: "/home",
    component: home,
    exact: true // 开启严格匹配模式
  },
  {
    name: "about",
    path: "/about",
    component: about,
    exact: true // 开启严格匹配模式
  },
  {
    name: "detail",
    path: "/detail",
    component: detail,
    exact: true, // 开启严格匹配模式
  },
  {
    name: "DetailChild1",
    path: "/detail/detailChild1",
    component: DetailChild1,
    exact: true, // 开启严格匹配模式
  },
  {
    name: "NotFound",
    path: "/404",
    component: NotFound,
    exact: false,
  },
  {
    type: "redirect",
    path: "/404"
  },
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
      <Switch>
        {
          routerArr.map((val, key) => {
            if (val.childer && val.childer.length) {
              return (
                <Route
                  key={key}
                  exact={val.exact}
                  path={val.path}
                  render={props => {
                    return <DetailChild1 path="/detail/detailChild1" {...props}></DetailChild1>
                  }}
                >
                </Route>
              )
            } else if (val.type === "redirect") {
              return (
                <Redirect
                  key={key}
                  to={val.path}
                  from={val.from}
                  exact={val.exact}
                >
                </Redirect>
              )
            } else {
              return (
                <Route
                  key={key}
                  exact={val.exact}
                  path={val.path}
                  component={val.component}
                >
                </Route>
              )
            }
          })
        }
      </Switch>
    )
  }
}

export default withRouter(RourerComp)
