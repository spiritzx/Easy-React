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
import SideComp from "./comp/PageSide"
import "./style/TSM.scss";

import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
const { Header, Content } = Layout;

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
        <SideComp />
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
              minHeight: 820,
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
