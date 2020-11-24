/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-11-02 19:49:39
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-24 23:06:43
 */
import React, {useState,  useEffect } from 'react';
import PageHeader from "./comp/PageHeader/PageHeader";
import adminRouterArr from "../../config/adminRouterConfig";
import routerFn from "../../router/router";
import RouterView from "../../components/RouterView/RouterView";
import SideComp from "./comp/PageSide/PageSide"
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
  
  // 管理全部路由
  let [routerArr, setRouterArr] = useState([]);
  // 侧边导航栏
  let [userRoute, setUseRoute] = useState([]);
  useEffect(() => {
    getUserRouterFn().then(res => {
      if (res.success) {
        let userRouteArr = res.data;
        console.log(res.data)
        setUseRoute(userRouteArr);
        let routerArr = routerFn(adminRouterArr.concat(userRouteArr));
        let currentPathObj = getPathObjFn(props.location.pathname, routerArr);
        if (currentPathObj) {
          props.addRouteFn(currentPathObj);
          console.log(props.routeBar);
        }
        setRouterArr(routerArr);
      }
    })
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    let currentPathObj = getPathObjFn(props.location.pathname, routerArr);
    if (currentPathObj) {
      props.addRouteFn(currentPathObj);
      console.log(props.routeBar);
    }
    // eslint-disable-next-line
  }, [props.location.pathname])
  console.log(routerArr);
  // 
  
  return (
    <Layout className="admin-page">
      <SideComp userRoute={userRoute} />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <PageHeader />
          <div>
            {
              props.routeBar.map((item, key) => {
                return (
                  <div key={key}>{ item.route.name }</div>
                )
              })
            }
          </div>
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
