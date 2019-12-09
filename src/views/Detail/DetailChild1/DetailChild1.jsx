import React, { Component } from "react";
class DetailChild1 extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  };
  componentDidMount() {
    console.log(this.props.location)
  };
  render() { 
    return ( <div>2</div> );
  }
}
 
export default DetailChild1;