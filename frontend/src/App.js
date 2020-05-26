import React, { Component } from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import { Navbar, Nav, Container, Header, Content, Footer } from 'rsuite';
import SignUp from './components/SignUp';
import { Login } from './components/Login';
import Homepage  from './components/Homepage'
import { BrowserRouter, Route } from 'react-router-dom'
import ShoeContainer from './containers/ShoeContainer'
import { CreateShoe } from './components/CreateShoe'

class App extends Component {

  state = {
	shoes: [],
	styles: {
		marginBottom: '50px'
	}
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
        <div className="App">
            <Container>
            	<Header style={this.state.styles}>
                	<Navbar appearance="inverse">
                  		<Navbar.Body>
							<Nav>
								<Nav.Item><b>Home</b></Nav.Item>
								<Nav.Item>Browse</Nav.Item>
							</Nav>
							<Nav pullRight>
								<Nav.Item>Login</Nav.Item>
								<Nav.Item>Sign Up</Nav.Item>
							</Nav>
                  		</Navbar.Body>
                	</Navbar>
              	</Header>
              	<Content>
					<ShoeContainer />  
					{/* <Login /> */}
				  	{/* <SignUp /> */}
				</Content>
              	{/* <Footer>Footer</Footer> */}
            </Container>
        </div>
    );
  }
}

export default App;
