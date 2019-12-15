import React, { Component } from "react";
import "./home.scss";
import HomeChilder from "../../components/HomeChilder/HomeChilder";
import ChangeArea from "../../components/ChangeArea/ChangeArea";

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
      fontColor: "red",
      style: {
        color: "#ccc"
      }
    }
  }
  render() {
    console.log(this.props)
    return this.renderFn(this.state.obj);
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
      ></HomeChilder>
      <ChangeArea></ChangeArea>
      <div><span>名字：</span>{ props.name }</div>
      <div><span>性别：</span>{ props.sex }</div>
      <ul>
        {props.arr.map(val => {
          return <li key={val.item}>{val.item}</li>
        })}
      </ul>
    </div>
  };

  changeColorFn = (res) => {
    this.setState({
      fontColor: res
    })
  }
}