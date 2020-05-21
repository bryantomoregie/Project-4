import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    shoes: [],
  }

  componentDidMount(){
    fetch('http://localhost:3000/shoes')
    .then(resp => resp.json())
    .then( shoes => (
      this.setState({shoes: shoes})
    ))
  }

  render(){
    console.log(this.state.shoes)
  return (
    <div className="App">
      <h1>hello world</h1>
      
    </div>
  );
  }
}

export default App;
