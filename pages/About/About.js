import React, { Component } from 'react'

export default class About extends Component {
    static async getInitialProps({ query }) {
        return {
            query
        }
    }
    render() {
        return (
            <div>
                {this.props.query.param}
            </div>
        )
    }
}
