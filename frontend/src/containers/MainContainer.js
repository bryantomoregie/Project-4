import React, { useState } from 'react'
import { Navbar, Nav, Container, Header, Content } from 'rsuite';
import { useHistory } from 'react-router-dom';

export function MainContainer() {
    
    let history = useHistory()

    let [ state, setState ] = useState({
		styles: {
			marginBottom: '50px'
		}
	})
    
    return(
        <Container>
            <Header style={state.styles}>
                <Navbar appearance="inverse">
                    <Navbar.Body>
                        <Nav>
                            <Nav.Item onClick={() => history.push('/')}><b>Home</b></Nav.Item>
                            <Nav.Item onClick={() => history.push('/all')}>Browse</Nav.Item>
                        </Nav>
                        <Nav pullRight>
                            <Nav.Item onClick={() => history.push('/signup')}>Sign Up</Nav.Item>
                            <Nav.Item onClick={() => history.push('/login')}>Login</Nav.Item>
                        </Nav>
                    </Navbar.Body>
                </Navbar>
            </Header>
            <Content>
                
            </Content>
        </Container>
    )
}