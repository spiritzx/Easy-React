import React, { Component } from "react";
import "./detail.scss";
import { CSSTransition} from 'react-transition-group';

class Detail extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      flag: false
    };
  }
  render() {
    console.log(this.props);
    return ( 
      <div class="">
        <p onClick={() => {this.setState({
          flag: !this.state.flag
        })}}>详情</p>
        <CSSTransition
          in={this.state.flag}
          classNames="fade"
          timeout={2000}
          mountOnEnter
        >
          <div>22</div>
        </CSSTransition>
      </div>
    );
  }
}
 
export default Detail;