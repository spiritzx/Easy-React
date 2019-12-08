import React, { Component } from "react";
import { Link } from 'react-router-dom';
import RouterView from "../../components/RouterView/RouterView";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() { 
    return ( 
      <div>
        <p>详情</p>
        <Link to="/detail/detailChild1">详情1</Link>
        <RouterView routerArr={this.props.router}></RouterView>
      </div>
    );
  }
}
 
export default Detail;