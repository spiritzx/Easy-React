import React, { Component } from "react";
import "./home.scss";
import HomeChilder from "../../components/HomeChilder/HomeChilder";
import ChangeArea from "../../components/ChangeArea/ChangeArea";
// import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import http from "../../http/http";

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
      }
    }
  }
  componentDidMount() {
    console.log(this)
    http.getRequest("/test/tomzAdmin/getGroup").then(res=> {
      console.log(res);
    })
  };
  render() {
    console.log(this.props)
    return this.renderFn(this.props);
  };
  renderFn = function (props) {

    return <div className="index-wrap">
      <p
        className={this.state._class + " title"}
        style={this.state.style}
      >
        首页
      </p>
      <HomeChilder
        color={this.state.fontColor}
        changeColorFn={(arg) => {this.changeColorFn(arg)}}
      >
      </HomeChilder>
      <br/>
      <ChangeArea></ChangeArea>
      <br/>
      <div><span>名字：</span>{ props.name }</div>
      {/* <div>{lastname}</div> */}
      <div><span>性别：</span>{ props.sex }</div>
    </div>
  };

  changeColorFn = (res) => {
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