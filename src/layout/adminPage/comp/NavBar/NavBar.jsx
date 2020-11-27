/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-11-25 20:17:51
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-27 22:49:14
 */
import React, { useRef, useState }  from "react";
import { connect } from "react-redux";
import { Button, Menu, Dropdown } from 'antd';
import { NavLink } from "react-router-dom"
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
  let wrap = useRef(null);
  let content = useRef(null);
  let [left, setLeft] = useState(20);
  let [step, setStep] = useState(0);
  let style = {
    left: left
  };
  const scrollFn = (num) => {
    let wrapW = wrap.current.offsetWidth - 40;
    let contentW = content.current.offsetWidth;
    if ((wrapW * num) < contentW) {
      setStep(num);
      let length = (wrapW * num * -1) + 20;
      setLeft(length);
    } else if (left < 20) {
      setLeft(20);
    }
  }
  
  const leftScroll = () => {
    scrollFn(step + 1)
  }
  const rightScroll = () => {
    let _step = step - 1 > 0 ? step - 1 : 0
    scrollFn(_step)
  }
  return (
    <div className="nav-bar">
      <div className="nav-bar__wrap" ref={wrap}>
        <div onClick={leftScroll} className="left-btn ctrl-btn">
          <LeftOutlined />
        </div>
        <div style={style} className="nav-bar__content" ref={content}>
          {
            props.routeBar.map((item, key) => {
              return (
                <Tag key={key}>
                  <NavLink to={item.route.path}> { item.route.c_name } </NavLink>
                </Tag>
              )
            })
          }
        </div>
        <div className="right-btn ctrl-btn" onClick={rightScroll}>
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