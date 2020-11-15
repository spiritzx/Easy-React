/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-11-02 19:49:39
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-15 11:47:52
 */
import React from "react";
import { Layout, Menu } from "antd";
import "./pageSide.scss";
import  icon from "../../../../components/iconComp/iconComp";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom"

const { Sider } = Layout
const { SubMenu } = Menu

function PageSide(props) {
  let title = null;
  if (!props.collapsed) {
    title = <p className="title">Easy-React</p>;
  } else {
    title = null;
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
        inlineCollapsed={props.collapsed}
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
                <SubMenu key={"sub" + i} icon={icon[val.icon]} title={val.name} >
                  {
                    val.childer.map((item, j) => {
                      return (
                        <Menu.Item
                          key={"sub" + j + i}
                          icon={icon[item.icon]}
                        >
                          {item.name}
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
                  {val.name}
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
export default connect(mapstate)(PageSide);


