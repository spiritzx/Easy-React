/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-11-02 19:49:39
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-12 22:21:27
 */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeSide } from "../../../../redux/pageSide/actions"
// 引入浏览器访问历史
// import { location } from 'react-router-dom';
import './PageHeader.scss';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }

  componentDidMount() {
    console.log(this.props)
  }
  setPageSide(collapsed) {
    this.props.changeSide(collapsed);
  }
  render() {
    let ctrlBtn = null
    if (this.props.collapsed) {
      ctrlBtn = <MenuUnfoldOutlined onClick={() => {this.setPageSide(false)}}/>
    } else {
      ctrlBtn = <MenuFoldOutlined onClick={() => {this.setPageSide(true)}}/>
    }
      
    return (
      <div className="top-nav">
        <div className="nav-icon">
          {
            ctrlBtn
          }
            
          
        </div>
        <div className="nav-main">
          <NavLink to="/admin/home" className="a-tag">首页</NavLink>
          <NavLink to="/admin/about" className="a-tag">关于</NavLink>
          <NavLink to="/admin/detail" className="a-tag">详情</NavLink>
        </div>
      </div>
    );
  }
}
// 取得redux的值，并且绑定到store身上
const mapstate = state => {
  return {
    collapsed: state.changeSide
  }
}
export default connect(mapstate, { changeSide })(Header)