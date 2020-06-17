import React, { Component } from "react"
import { Layout, Menu } from 'antd'
import "./pageSide.scss"
import  icon from '../../../../fnComp/iconComp/iconComp'
import { connect } from 'react-redux'

const { Sider } = Layout
const { SubMenu } = Menu

class PageSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navArr: [
        {
          name: "01",
          icon: "appstoreOutlined"
        },
        {
          name: "02",
          icon: "cesktopOutlined",
          childer: [
            {
              name: "021",
            },
            {
              name: "022",
              childer: [
                {
                  name: "0221",
                }
              ]
            }
          ]
        },
        {
          name: "03",
          icon: "pieChartOutlined",
          childer: [
            {
              name: "031",
            }
          ]
        }
      ]
    }
  }
  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
        <div className="page-logo">
          <img src={require("../../../../assets/imgs/logo192.png")} alt="logo" className="app-logo"/>
          <p>easy-react</p>
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.props.collapsed}
        >
          {
            this.state.navArr.map((val, i) => {
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
}
// 取得redux的值，并且绑定到store身上
const mapstate = state => {
  return {
    collapsed: state.changeSide
  }
}
export default connect(mapstate)(PageSide);


