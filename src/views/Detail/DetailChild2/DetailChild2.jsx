import React, { Component } from 'react'

export default class DetailChild2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  componentDidMount() {
    console.log(this.props.match.params.id);
  };
  render() {
    return (
      <div>
        2333
      </div>
    )
  };
}
