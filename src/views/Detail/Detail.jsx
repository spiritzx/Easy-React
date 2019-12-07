import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <p>详情</p>
        
        {
          this.props.router.map((val, key) => {
            console.log(val);
            return (
              <Route
                key={key}
                exact={val.exact}
                path={val.path}
                render= {props => {
                  return (<val.component {...props} />)
                }}
              >
              </Route>
            )
          })
        }
        <Link to="/detail/detailChild1">详情1</Link>
      </div>
    );
  }
}
 
export default Detail;