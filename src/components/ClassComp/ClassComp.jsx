import React, { Component } from 'react'


export default class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      name: "类组件"
    }
  };
  UNSAFE_componentWillMount () {
    console.log(this.state.name + "componentWillMount");
  };
  componentDidMount() {
    console.log(this.state.name + "omponentDidMount");
  }
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
