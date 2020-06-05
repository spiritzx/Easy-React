import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
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

    }
  }

  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div className="top-nav">
        <div className="nav-icon">
          <MenuUnfoldOutlined />
        </div>
        <div className="nav-main">
          <NavLink to="/home" className="a-tag">首页</NavLink>
          <NavLink to="/about" className="a-tag">关于</NavLink>
          <NavLink to="/detail" className="a-tag">详情</NavLink>
        </div>
      </div>
    );
  }
}
// 取得redux的值，并且绑定到store身上
const mapstate = state => {
  return {
    collapsed: state.setCollapsed
  }
}
export default connect(mapstate, {})(Header)