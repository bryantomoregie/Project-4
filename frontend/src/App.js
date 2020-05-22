import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import { FlexboxGrid } from 'rsuite'
import { Container, Header, Content, Footer } from 'rsuite';
import SignUp from './components/SignUp'
import Login from './components/Login'

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
            <Container>
                <Header></Header>
                <Content>
                  <FlexboxGrid justify="center">
                      <FlexboxGrid.Item colspan={5}></FlexboxGrid.Item>
                      <FlexboxGrid.Item colspan={5}>
                        <SignUp />
                        <hr></hr>
                        <Login />
                      </FlexboxGrid.Item>
                      <FlexboxGrid.Item colspan={5}></FlexboxGrid.Item>
                  </FlexboxGrid>
                </Content>
                <Footer></Footer>
            </Container>
        </div>
    );
  }
}

export default App;
