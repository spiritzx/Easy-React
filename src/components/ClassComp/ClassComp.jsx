import React, { Component } from 'react'


export default class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      name: "类组件"
    }
  };
  render() {
    return (
      <div>
        <p onClick={() => {this.showFn(2)}}>{this.state.name}</p>
        <p>{this.props.className}</p>
      </div>
    );
  };
  showFn(arg) {
    console.log(this);
    this.setState({
      name: "修改" + arg
    })
  }
};
