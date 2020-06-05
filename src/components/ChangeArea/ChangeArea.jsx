import React, { Component } from "react";
import { connect } from 'react-redux'
import { changeName, changeSex } from '../../redux/action';
import { Button, Input } from "antd"

function view() {
  return (
    <div>
      <div>
        <Input value={this.state.name} type="text" onChange={event => {this.changeNameFn(event)}}></Input>
        <Button type="primary" onClick={() => {this.setName()}}>设置名字</Button>
      </div>
      <br/>
      <div>
        <Input value={this.state.sex} type="text" onChange={event => {this.changeSexFn(event)}}></Input>
        <Button type="primary" onClick={() => {this.setSex()}}>设置性别</Button>
      </div>
    </div>
  )
}

class ChangeArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      sex: ""
    }
  };
  render() {
    return view.bind(this)()
  };
  setName() {
    this.props.changeName(this.state.name);
  };
  setSex() {
    this.props.changeSex(this.state.sex);
  };
  changeNameFn(e){
    this.setState({
      name: e.target.value
    })
  };
  changeSexFn(e){
    this.setState({
      sex: e.target.value
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
export default connect(mapstate, {changeName, changeSex})(ChangeArea);