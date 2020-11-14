/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-11-02 19:49:39
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-14 21:24:30
 */
import React from "react";
import { withRouter } from "react-router-dom";
import AdminPage from "../layout/adminPage/adminPage";
import UserPage from "../layout/userPage/userPage";
import "../assets/theme/one.scss";
 
function App(props) {                                                                  
  let pageView = null;
  if (props.location.pathname === '/') {
    pageView = <AdminPage></AdminPage>
  } else if (props.location.pathname.search(/^\/admin\//) >= 0) {
    pageView = <AdminPage></AdminPage>
  } else {
    pageView = <UserPage></UserPage>
  }
  if (!pageView) {
    pageView = <AdminPage></AdminPage>
  }
  return (
    <div className="theme-one">
      {pageView}
    </div>
  )
}
export default withRouter(App);