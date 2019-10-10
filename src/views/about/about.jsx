import React, { Component } from 'react';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      msg: "关于"
    }
  };
  render() {
    return <div>
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