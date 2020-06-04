import React, { Component } from "react"
import { Layout, Menu } from 'antd'
import TreeComp from "../../../components/TreeComp/TreeComp"
import "./pageSide.scss"
const { Sider } = Layout


class PageSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      navArr: [
        {
          name: "01"
        },
        {
          name: "02",
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
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <div className="page-logo">easy-react</div>
        <TreeComp key={1} navArr={this.state.navArr}/>
      </Sider>
    )
  }
}

export default PageSide;


