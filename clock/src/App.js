import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {time: new Date().toLocaleTimeString()}
    setInterval(()=>{
      this.setState({time: new Date().toLocaleTimeString()})
    }, 1000)
  }
  render() {
    return <div>{this.state.time} {this.props.timezone}</div>
  }
}
class HelloWorld extends Component {
  render() {
    console.log(this.props.name)
    console.log(this.props.city)
    return <div className="main-text"
    style={{color:'red'}}
    >Hello {this.props.name} from {this.props.city}</div>
  }
}
class App extends Component {
  render() {
    return (
      <div> 
        <HelloWorld name="Azat" city="San Francisco"/>
        <HelloWorld name="John" city="New York"/>
        <HelloWorld name="Azat" city="San Francisco"/>
        <HelloWorld name="Azat" city="San Francisco"/>
        <HelloWorld name="Azat" city="San Francisco"/>
        <hr/>
        <Clock timezone={'PT'}/>
      </div>
    );
  }
}

export default App;
