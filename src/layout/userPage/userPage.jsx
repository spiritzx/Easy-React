/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-11-02 19:49:39
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-14 21:55:09
 */
import React, { Component } from 'react';
import devRouterArr from "../../config/userRouterConfig";
import routerFn from "../../router/router";
import RouterView from "../../components/RouterView/RouterView";
import "./userPage.scss";

let routerArr = routerFn(devRouterArr)
class userPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }
  componentDidMount() {
    console.log(this.props);
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  render() {
    return (
      <RouterView routerArr={routerArr}></RouterView>
    )
  }
}

export default userPage;
