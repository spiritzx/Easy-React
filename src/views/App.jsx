import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import TMF from "../layout/TMF/TMF";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    console.log(this.props);
  }
  componentDidUpdate() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <TMF></TMF>
      </div>
    )
  }
}
export default withRouter(App);
