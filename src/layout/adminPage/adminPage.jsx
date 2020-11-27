/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-11-02 19:49:39
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-27 20:14:25
 */
import React, {useState,  useEffect } from 'react';
import PageHeader from "./comp/PageHeader/PageHeader";
import adminRouterArr from "../../config/adminRouterConfig";
import routerFn from "../../router/router";
import RouterView from "../../components/RouterView/RouterView";
import SideComp from "./comp/PageSide/PageSide";
import NavBar from "./comp/NavBar/NavBar";
import "./adminPage.scss"
import { Layout } from 'antd';
import { getUserRouterFn } from "../../api/user";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addRouteFn } from "../../redux/pageSide/actions";

const { Header, Content } = Layout;

// 通过路由路径获得路由对象
function getPathObjFn(path, routeArr) {
  let pathObj = null;
  function mapRouteArr(path, routeArr) {
    routeArr.forEach(element => {
      if (element.childer) {
        mapRouteArr(path, element.childer)
      } else {
        if (element.path === path) {
          pathObj = element;
        }
      }
    });
  }
  mapRouteArr(path, routeArr);
  return pathObj;
}

function AdminPage(props) {
  // 原始全部路由
  let [allRouter, setAllRouter] = useState([]);
  // 管理全部路由
  let [routerArr, setRouterArr] = useState([]);
  // 侧边导航栏
  let [userRoute, setUseRoute] = useState([]);
  useEffect(() => {
    getUserRouterFn().then(res => {
      if (res.success) {
        let userRouteArr = res.data;
        setUseRoute(userRouteArr);
        let _allRouter = adminRouterArr.concat(userRouteArr);
        setAllRouter(_allRouter);
        let routerArr = routerFn(_allRouter);
        let currentPathObj = getPathObjFn(props.location.pathname, _allRouter);
        if (currentPathObj) {
          props.addRouteFn(currentPathObj);
          // console.log(props.routeBar);
        }
        setRouterArr(routerArr);
      }
    })
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    let currentPathObj = getPathObjFn(props.location.pathname, allRouter);
    if (currentPathObj) {
      props.addRouteFn(currentPathObj);
      // console.log(props.routeBar);
    }
    // eslint-disable-next-line
  }, [props.location.pathname])
  return (
    <Layout className="admin-page">
      <SideComp userRoute={userRoute} />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <PageHeader />
          <NavBar></NavBar>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 830
          }}
        >
          <RouterView routerArr={routerArr}></RouterView>
        </Content>
      </Layout>
    </Layout>
  )
}

function mapProps(state) {
  return {
    routeBar: state.routeBarFn
  }
}
function mapDispatch(dispatch) {
  return {
    addRouteFn: (route)=> dispatch(addRouteFn(route))
  }
}
export default connect(mapProps, mapDispatch)(withRouter(AdminPage));
