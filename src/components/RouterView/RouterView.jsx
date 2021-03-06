/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-11-02 19:49:39
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-22 14:55:16
 */
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NotFound from "../../views/NotFound/NotFound";

class RourerView extends Component {
  constructor(...props) {
    super(...props);
    this.state = {}
  }
  render() {
    return (
      <Switch>
        {
          this.props.routerArr.map((val, key) => {
            if (val.childer && val.childer.length) {
              return (
                <RourerView key={key} routerArr={val.childer}></RourerView>
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
                  render= {() => (
                    <val.component meta={val.meta}></val.component>
                  )}
                >
                </Route>
              )
            }
          })
        }
        <Route component={NotFound}></Route>
      </Switch>
    )
  }
}

export default RourerView;
