import React, { Component } from "react"
import { withRouter } from "react-router-dom"
// import TMF from "../layout/TMF/TMF"
import TSM from "../layout/TSM/TSM"
import "../assets/theme/one.scss"

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
      <div className="theme-one">
        <TSM></TSM>
      </div>
    )
  }
}
export default withRouter(App);
