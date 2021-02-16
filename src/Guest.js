import React, { Component } from 'react'

export default class Guest extends Component {
    render() {
        return (
            <div>
                <h1>Welcome To Guest Page</h1>
               <button type="button" onClick={this.props.clickData}>Login</button>
                <button>Sign Up</button>
            </div>
        )
    }
}
