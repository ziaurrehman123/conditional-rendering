import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div>
                <h1>Welcome To User Page</h1>
                <button onClick={this.props.clickData}>Logout</button>
            </div>
        )
    }
}

