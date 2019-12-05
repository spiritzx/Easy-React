import React, { Component } from 'react';
// 引入头部组件
import Header from "../../components/header/header";
// 引入底部组件
import Footer from "../../components/footer/footer";
import RouterComp from "../../router";
// import { withRouter } from 'react-router-dom';
import "./style/TMF.scss";

class TMF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575364524585&di=64c5007776053b95a18416cfe2e48a88&imgtype=0&src=http%3A%2F%2Fpix10.agoda.net%2FhotelImages%2F490%2F49023%2F49023_17021011350050904933.jpg%3Fs%3D1024x768"
    }
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="page-main-wrap">
          {/* <img src={this.state.img} alt=""/> */}
          <RouterComp></RouterComp>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default TMF;
