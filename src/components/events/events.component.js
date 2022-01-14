import React, { Component } from 'react';

export default class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    };
  }

  render() {
    return (
      <div>
        <p>Events component!</p>
      </div>
    );
  }
}
