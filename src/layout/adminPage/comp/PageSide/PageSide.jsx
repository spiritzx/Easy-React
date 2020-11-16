/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-11-02 19:49:39
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-16 22:30:32
 */
import React from "react";
import { Layout, Menu } from "antd";
import "./pageSide.scss";
import  icon from "../../../../components/iconComp/iconComp";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { addRouteFn } from "../../../../redux/pageSide/actions";

const { Sider } = Layout
const { SubMenu } = Menu

function PageSide(props) {
  let title = null;
  if (!props.collapsed) {
    title = <p className="title">Easy-React</p>;
  } else {
    title = null;
  }
  function addRouteFn(val) {
    console.log(val);
    console.log(props)
  }
  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <div className="page-logo">
        <img src={require("../../../../assets/imgs/logo192.png")} alt="logo" className="app-logo"/>
        { title }
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
        <Menu.Item
          icon= { icon.mailOutlined }
        >
          <NavLink to="/admin/home">首页</NavLink>
        </Menu.Item>
        {
          props.userRoute.map((val, i) => {
            if (val.childer) {
              return (
                <SubMenu key={"sub" + i} icon={icon[val.icon]} title={val.c_name} >
                  {
                    val.childer.map((item, j) => {
                      return (
                        <Menu.Item
                          key={"sub" + j + i}
                          icon={icon[item.icon]}
                          onClick={() => {addRouteFn(item)}}
                        >
                          <NavLink to={item.path}> {item.c_name}</NavLink>
                        </Menu.Item>
                      )
                    })
                  }
                </SubMenu>
              )
            } else {
              return (
                <Menu.Item
                  key={i}
                  icon={icon[val.icon]}
                  
                >
                  <NavLink to={val.path}> {val.c_name}</NavLink>
                </Menu.Item>
              )
            }
          })
        }
      </Menu>
    </Sider>
  )
}
// 取得redux的值，并且绑定到store身上
const mapstate = state => {
  return {
    collapsed: state.changeSide
  }
}
const mapDispatch = (dispatch) => {
  return {
    addRouteFn: (route)=> dispatch(addRouteFn(route))
  }
};

export default connect(mapstate, mapDispatch)(PageSide);


