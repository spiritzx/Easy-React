import React, { Component } from 'react'
import { Menu } from 'antd'
import  icon from '../../fnComp/iconComp/iconComp';

const { SubMenu } = Menu

class TreeComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }
  render() {
    return (
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={this.state.collapsed}
      >
        {
          this.props.navArr.map((val, i) => {
            if (val.childer) {
              return (
                <SubMenu key={this.props.isChild ? 'child' + i : i} icon={icon[val.icon]} title={val.name} >
                  <TreeComp navArr={val.childer} isChild={true} />
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
    )
  }
}

export default TreeComp;
