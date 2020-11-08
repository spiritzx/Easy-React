/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-11-02 19:49:39
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-07 11:09:15
 */
import React, { Component } from 'react';
// import { Switch } from "react-router-dom";
// 引入头部组件
import PageHeader from "../../components/header/header";
// 引入底部组件
import PageFooter from "../../components/footer/footer";

import devRouterArr from "../../router/devRouterConfig"
import routerFn from "../../router/router";

import RouterView from "../../components/RouterView/RouterView";
// import { withRouter } from 'react-router-dom';
import "./userPage.scss";

import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

let routerArr = routerFn(devRouterArr)
console.log(routerArr)
class TMF extends Component {
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
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
      // <div className="App">
      //   <Header></Header>
      //   <div className="page-main-wrap">
      //     <RouterView routerArr={routerArr}></RouterView>
      //   </div>
      //   <Footer/>
      // </div>
    )
  }
}

export default TMF;
