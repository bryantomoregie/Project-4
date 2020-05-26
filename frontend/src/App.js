import React, { Component, useState } from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import ShoeContainer from './containers/ShoeContainer'
import { MainContainer } from './containers/MainContainer'
import SignUp from './components/SignUp';
import { Login } from './components/Login';
import { Homepage } from './components/Homepage';
import { BrowserRouter, Route, useHistory } from 'react-router-dom';
import { Createshoe } from './components/Createshoe'
import { Mycloset } from './components/Mycloset'


function App(props) {
    return (
        <div className="App">
			<BrowserRouter>
				<MainContainer />
				<Route exact path="/" component={Homepage} />
				<Route exact path="/all" component={ShoeContainer} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/createshoe" component={Createshoe} />
				<Route exact path="/mycloset" component={Mycloset} />
			</BrowserRouter>  
		</div>
    );
  }


export default App;
