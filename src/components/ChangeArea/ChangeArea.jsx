import React, { Component } from 'react'

export default class ChangeArea extends Component {
  render() {
    return (
      <div>
        <div>
          <input type="text"/>
          <button onClick={() => {this.setName(1)}}>设置名字</button>
        </div>
        <div>
          <input type="text"/>
          <button onClick={() => {this.setSex(2)}}>设置性别</button>
        </div>
      </div>
    )
  };
  setName(arg) {
    console.log(arg);
  };
  setSex(arg) {
    console.log(arg);
  }
}
