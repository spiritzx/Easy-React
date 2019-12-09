import React, { Component } from 'react'

export default class HomeChilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue"
    }
  };

  render() {
    return (
      <div style={{"color": this.props.color}}>
        home-child
        <button onClick={() => {this.changeColorFn()}}>changeColorFn</button>
      </div>
    )
  }

  changeColorFn() {
    this.props.changeColorFn(this.state.color)
  }
}
