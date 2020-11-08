/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-11-02 19:49:39
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-07 11:07:05
 */
import React, { Component } from 'react';
// import { Switch } from "react-router-dom";
// 引入头部组件
import PageHeader from "./comp/PageHeader/PageHeader";
import adminRouterArr from "../../config/adminRouterConfig";
import routerFn from "../../router/router";
import RouterView from "../../components/RouterView/RouterView";
// import { withRouter } from 'react-router-dom';
import SideComp from "./comp/PageSide/PageSide"
import "./adminPage.scss"

import { Layout } from 'antd';


const { Header, Content } = Layout;

let routerArr = routerFn(adminRouterArr);
console.log(routerArr)
class TMF extends Component {
  render() {
    return (
      <Layout>
        <SideComp />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <PageHeader />
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 820,
            }}
          >
            <RouterView routerArr={routerArr}></RouterView>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default TMF;
