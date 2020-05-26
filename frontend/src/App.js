import React, { Component } from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import { Navbar, Nav, Container, Header, Content, Footer } from 'rsuite';
import ShoeContainer from './containers/ShoeContainer'
import SignUp from './components/SignUp';
import { Login } from './components/Login';
import { Homepage } from './components/Homepage';
import { BrowserRouter, Route } from 'react-router-dom';
import { Createshoe } from './components/Createshoe';
import  Mycloset  from './containers/Mycloset';


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
      <BrowserRouter>
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
					
				</Content>
            </Container>
            <Route path="/homepage" component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path={"/signup"} component={SignUp} />
            <Route path={"/createshoe"} component={Createshoe} />
            <Route path={"/mycloset"} component={Mycloset} />
            <Route path={"/shoecontainer"} component={ShoeContainer} />
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
