import React, { Component } from "react"
import "./home.scss"
import HomeChilder from "../../components/HomeChilder/HomeChilder"
import ChangeArea from "../../components/ChangeArea/ChangeArea"
import listItem from "../../fnComp/listItem/listItem"
// import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import http from "../../http/http";

// 渲染函数
function viewFn() {
  let state = this.state
  let props = this.props
  return (
    <div className="index-wrap">
      <p
        style={state.style}
      >
        首页
      </p>
      <HomeChilder
        color={state.fontColor}
        changeColorFn={arg => {this.changeColor(arg)} }
      >
      </HomeChilder>
      <br/>
      <ChangeArea></ChangeArea>
      <br/>
      <div>
        <span>名字：</span>
        { props.name }
      </div>
      {/* <div>{lastname}</div> */}
      <div><span>性别：</span>{ props.sex }</div>
      {/* {
        this.state.arr.map((val, key) => {
          return (
            listItem(val.name, key)
          )
        })
      } */}
    </div>
  )
}

class home extends Component {
  //声明属性
  // static propTypes = {
  //   lastname: PropTypes.string.isRequired,
  //   addNameCreater: PropTypes.func.isRequired,
  //   lastage: PropTypes.number.isRequired,
  //   addAgeCreater: PropTypes.func.isRequired,
  //   addNameAsync: PropTypes.func.isRequired
  // }

  constructor(props) {
    super(props);
    this.state = {
      _class: "title-h1",
      fontColor: "red",
      style: {
        color: "#ccc"
      },
      arr: [
        {
          key: 0,
          name: "01"
        },
        {
          key: 1,
          name: "02"
        },
        {
          key: 2,
          name: "03"
        },
      ]
    }
  }
  componentDidMount() {
    http.getRequest("/mock/test").then(res=> {
      console.log(res);
    })
  }

  render() {
    return viewFn.bind(this)()
  }
  changeColor = (res) => {
    this.setState({
      fontColor: res
    })
  }
}
// 取得redux的值，并且绑定到store身上
const mapstate = state => {
  return {
    name: state.changeName,
    sex: state.changeSex
  }
}
export default connect(mapstate)(home)