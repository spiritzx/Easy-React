import React, { Component } from "react";
import {connect} from 'react-redux'
import {changeName, changeSex} from '../../redux/action';

class ChangeArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      sex: ""
    }
  };
  render() {
    console.log(this)
    return (
      <div>
        <div>
          <input type="text" onChange={event => {this.changeNameFn(event)}}/>
          <button onClick={() => {this.setName()}}>设置名字</button>
        </div>
        <br/>
        <div>
          <input type="text" onChange={event => {this.changeSexFn(event)}}/>
          <button onClick={() => {this.setSex()}}>设置性别</button>
        </div>
      </div>
    )
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