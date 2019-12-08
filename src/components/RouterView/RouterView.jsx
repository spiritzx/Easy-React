import React, { Component } from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
// import NotFound from "./views/NotFound/NotFound";
// import home from "./views/home/home";
// import about from "./views/about/about";
// import detail from "./views/Detail/Detail";

class RourerComp extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Switch>
        {
          this.props.routerArr.map((val, key) => {
            if (val.childer && val.childer.length) {
              return (
                <Route
                  key={key}
                  exact={val.exact}
                  path={val.path}
                  render={props => {
                    return <val.component {...props} router={val.childer}></val.component>
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
