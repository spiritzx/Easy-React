import React, { Component } from "react";
import "./home.scss";

let obj = {
  name: "tom_z",
  sex: "男",
  arr: [
    {item: 1},
    {item: 2},
    {item: 3}
  ]
}
let _class = "title-h1";
let style = {
  color: "#ccc"
}

function renderFn(props) {
  return <div>
    <p
      className={_class + " title"}
      style={style}
    >首页</p>
    <div><span>名字：</span>{ props.name }</div>
    <div><span>性别：</span>{ props.sex }</div>
    <ul>
      {props.arr.map(val => {
        return <li key={val.item}>{val.item}</li>
      })}
    </ul>
  </div>
}


export default class home extends Component {
  render() {
    return renderFn(obj);
  }
}