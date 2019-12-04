import React, { Component } from "react";
import "./home.scss";

export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        name: "tom_z",
        sex: "男",
        arr: [
          {item: 1},
          {item: 2},
          {item: 3}
        ]
      },
      _class: "title-h1",
      style: {
        color: "#ccc"
      }
    }
  }
  render() {
    return this.renderFn(this.state.obj);
  };
  renderFn = function (props) {
    return <div>
      <p
        className={this.state._class + " title"}
        style={this.state.style}
      >
        首页
      </p>
      <button onClick={() => {this.setName(1)}}>设置名字</button>
      <button onClick={() => {this.setSex(2)}}>设置性别</button>
      <div><span>名字：</span>{ props.name }</div>
      <div><span>性别：</span>{ props.sex }</div>
      <ul>
        {props.arr.map(val => {
          return <li key={val.item}>{val.item}</li>
        })}
      </ul>
    </div>
  };
  setName = function(arg) {
    console.log(arg)
  };
  setSex = function(arg) {
    console.log(arg)
  }
}