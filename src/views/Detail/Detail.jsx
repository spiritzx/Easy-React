import React, { Component } from "react";
import { Link } from 'react-router-dom';
import RouterView from "../../components/RouterView/RouterView";

class Detail extends Component {
  constructor(...props) {
    super(...props);
    this.state = {};
  }
  render() { 
    return ( 
      <div>
        <p>详情</p>
        <Link to="/detail/detailChild1?id=544">详情1</Link>
        <Link to={
          {
            pathname: "/detail/detailChild1",
            search: '?sort=name',
            hash: '#the-hash',
            state: 544
          }
        }>详情1-1</Link>
        <Link to="/detail/detailChild2/544">详情2</Link>
        <RouterView routerArr={this.props.router}></RouterView>
      </div>
    );
  }
}
 
export default Detail;