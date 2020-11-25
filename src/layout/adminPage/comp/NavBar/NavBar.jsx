/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-11-25 20:17:51
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-25 22:00:13
 */
import React  from "react";
import { connect } from "react-redux";
import { Button, Menu, Dropdown } from 'antd';
import { DownOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import "./NavBar.scss";

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
)
function NavBar(props) {
  return (
    <div className="nav-bar">
      <div className="nav-bar__wrap">
        <div className="left-btn ctrl-btn">
          <LeftOutlined />
        </div>
        <div className="nav-bar__content">
          {
            props.routeBar.map((item, key) => {
              return (
                <Tag key={key}>{ item.route.c_name }</Tag>
              )
            })
          }
        </div>
        <div className="right-btn ctrl-btn">
          <RightOutlined />
        </div>
      </div>
      <div className="dropmenu">
        <Dropdown overlay={menu}>
          <Button type="text" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Hover me <DownOutlined />
          </Button>
        </Dropdown>
      </div>
    </div>
  )
}
let mapProps = (state) => ({
  routeBar: state.routeBarFn
})
export default connect(mapProps)(NavBar);