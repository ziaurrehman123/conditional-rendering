import React, { Component } from 'react'
import User from './User'
import Guest from './Guest'

export default class App extends Component {
  state={
    isLoggedIn: false 
  };

  loginClick =()=> {
this.setState({isLoggedIn:true})
  }
  logoutClick =()=> {
    this.setState({isLoggedIn:false})
      }
  render() {
    const isLoggedIn= this.state.isLoggedIn;
    if (isLoggedIn) {
      return <User clickData={this.logoutClick}/>
    }
    return <Guest clickData={this.loginClick}/>
  }
}



