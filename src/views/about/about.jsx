import React, { Component } from 'react';
import FnComp from "../../components/FnComp/FnComp";
import ClassComp from "../../components/ClassComp/ClassComp";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      msg: "关于",
      fnName: "函数组件",
      className: "ClasssComp"
    }
  };
  render() {
    return <div>
      <FnComp arg={this.state.fnName}></FnComp>
      <ClassComp props={this.state.className} />
      <p onClick={() => { this.showFn(2) }}>修改</p>
      <h1>{this.state.msg}</h1>
    </div>;
  };
  showFn = function (arg) {
    this.setState({
      msg: "5"
    })
  }
}