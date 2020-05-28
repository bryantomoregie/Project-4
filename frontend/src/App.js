import React, { Component, useState, useEffect } from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import ShoeContainer from './containers/ShoeContainer'
import { MainContainer } from './containers/MainContainer'
import SignUp from './components/SignUp';
import { Login } from './components/Login';
import { Homepage } from './components/Homepage';
import { BrowserRouter, Route, useHistory } from 'react-router-dom';
import  Mycloset  from './containers/Mycloset';
import  Cart  from './components/Cart'
import { Createshoe } from './components/Createshoe'
import ShoeDetails from './components/ShoeDetails'
import { FlexboxGrid } from 'rsuite';

function App(props) {
	
	let [ user, setUser ] = useState(null)
  let [cart, setCart] = useState([])

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
					<FlexboxGrid justify="center">
						<FlexboxGrid.Item colspan={22}>
							<Route exact path="/" component={() => <Homepage user={user}/>} />
							<Route exact path="/all" component={ShoeContainer} />
							<Route exact path="/login" component={() => <Login setCurrentUser={setCurrentUser}/>} />
							<Route exact path="/signup" component={SignUp} />
							<Route exact path="/createshoe" component={() => <Createshoe user={user}/>} />
							<Route exact path="/mycloset" component={() => <Mycloset user={user}/>} />
							<Route exact path="/cart" component={() => <Cart cart={cart} />} />
							<Route exact path="/shoes/:id" component={() => <ShoeDetails cart={cart} setCart ={setCart} />} />
	
						</FlexboxGrid.Item>
					</FlexboxGrid>
			</BrowserRouter>  
		</div>
    );
  }


export default App;
