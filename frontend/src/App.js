import React, { Component, useState, useEffect } from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import ShoeContainer from './containers/ShoeContainer'
import { MainContainer } from './containers/MainContainer'
import SignUp from './components/SignUp';
import { Login } from './components/Login';
import { Homepage } from './components/Homepage';
import { BrowserRouter, Route, useHistory } from 'react-router-dom';
<<<<<<< HEAD
import { Createshoe } from './components/Createshoe';
import  Mycloset  from './containers/Mycloset';
import { Cart } from './components/cart/Cart'
=======
import { Createshoe } from './components/Createshoe'
import  Mycloset  from './containers/Mycloset'
import ShoeDetails from './components/ShoeDetails'
>>>>>>> bf41bd7efc2395b49d6d3e7330194ba1ddd78062

function App(props) {
	
	let [ user, setUser ] = useState(null)

	let setCurrentUser = (currentUser) => { setUser(currentUser) } 

	useEffect(() => {
		fetch('http://localhost:3000/login', {
			credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
		})
		.then(resp => resp.json())
		.then(currentUser => setUser(currentUser))
	}, [])

    return (
        <div className="App">
			<BrowserRouter>
				<MainContainer user={user} setCurrentUser={setCurrentUser} />
				<Route exact path="/" component={() => <Homepage user={user}/>} />
				<Route exact path="/all" component={ShoeContainer} />
				<Route exact path="/login" component={() => <Login setCurrentUser={setCurrentUser}/>} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/createshoe" component={() => <Createshoe user={user}/>} />
				<Route exact path="/mycloset" component={() => <Mycloset user={user}/>} />
<<<<<<< HEAD
        <Route exact path="/cart" component={Cart} />
      </BrowserRouter>  
=======
				<Route exact path="/shoes/:id" component={() => <ShoeDetails />} />
			</BrowserRouter>  
>>>>>>> bf41bd7efc2395b49d6d3e7330194ba1ddd78062
		</div>
    );
  }


export default App;
