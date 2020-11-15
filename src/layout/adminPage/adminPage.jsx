/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-11-02 19:49:39
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-15 11:52:23
 */
import React, {useState,  useEffect } from 'react';
import PageHeader from "./comp/PageHeader/PageHeader";
import adminRouterArr from "../../config/adminRouterConfig";
import routerFn from "../../router/router";
import RouterView from "../../components/RouterView/RouterView";
// import { withRouter } from 'react-router-dom';
import SideComp from "./comp/PageSide/PageSide"
import "./adminPage.scss"
import { Layout } from 'antd';
import { getUserRouterFn } from "../../api/user";

const { Header, Content } = Layout;


function AdminPage() {
  let [routerArr, setRouterArr] = useState([]);
  let [userRoute, setUseRoute] = useState([]);
  useEffect(() => {
    getUserRouterFn().then(res => {
      if (res.success) {
        setUseRoute(res.data);
      }
    })
    let routerArr = routerFn(adminRouterArr);
    setRouterArr(routerArr);
  }, [])
  console.log(routerArr)
  return (
    <Layout className="admin-page">
      <SideComp userRoute={userRoute} />
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

export default AdminPage;
