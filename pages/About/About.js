import React, { Component } from 'react';

export default class About extends Component {
  static async getInitialProps({ query }) {
    return {
      query,
    };
  }

  render() {
    return (
      <div style={{ color: 'white', textAlign: 'center' }}>
        {/* eslint-disable-next-line */}
        {this.props.query.param }
      </div>
    );
  }
}
