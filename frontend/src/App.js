import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import { FlexboxGrid } from 'rsuite'
import SignUp from './components/SignUp';
import { Login } from './components/Login';
import { Homepage } from './components/Homepage';
import { BrowserRouter, Route } from 'react-router-dom';
import { Createshoe } from './components/Createshoe'
import { Mycloset } from './components/Mycloset'
import { Navigationbar } from './components/Navigationbar'

class App extends Component {


  state = {
    shoes: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/shoes')
    .then(resp => resp.json())
    .then( shoes => (
      this.setState({shoes: shoes})
    ))
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
        <Route path="/homepage" component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path={"/signup"} component={SignUp} />
        <Route path={"/createshoe"} component={Createshoe} />
        <Route path={"/mycloset"} component={Mycloset} />
        <Route path={"/navigationbar"} component={Navigationbar}/>
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
