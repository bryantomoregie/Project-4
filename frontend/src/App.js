import React, { Component, useState, useEffect } from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import ShoeContainer from './containers/ShoeContainer'
import { MainContainer } from './containers/MainContainer'
import SignUp from './components/SignUp';
import { Login } from './components/Login';
import { Homepage } from './components/Homepage';
import { BrowserRouter, Route, useHistory } from 'react-router-dom';
import { Createshoe } from './components/Createshoe'
import  Mycloset  from './containers/Mycloset'

function App(props) {

	let [ user, setUser ] = useState(null)

	let setCurrentUser = (id) => { setUser(id) } 

	useEffect(() => {
		if(localStorage.id) {
			setUser(parseInt(localStorage.id))
			console.log(`logged in with user id: ${user}`)
		}
	})

	// useEffect(() => {
	// 	console.log('running')
	// 	fetch('http://localhost:3000/login')
	// 	.then(resp => resp.json())
	// 	.then(data => console.log(data))
	// }, [])

    return (
        <div className="App">
			<BrowserRouter>
				<MainContainer />
				<Route exact path="/" component={Homepage} />
				<Route exact path="/all" component={ShoeContainer} />
				<Route exact path="/login" component={() => <Login setUser={setCurrentUser}/>} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/createshoe" component={Createshoe} />
				<Route exact path="/mycloset" component={Mycloset} />
			</BrowserRouter>  
		</div>
    );
  }


export default App;
