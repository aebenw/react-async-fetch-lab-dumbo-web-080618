// create your App component here
import React, { Component } from 'react'

export default class App extends Component {

  constructor(){
  super()
    this.state = {
      
    }
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(res => this.setState({
      res
    }, (console.log(this.state))))
  }


  render(){
    return (
      <div>What's up</div>
    )
  }

}
