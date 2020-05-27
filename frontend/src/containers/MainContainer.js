import React, { useState } from 'react'
import { Navbar, Nav, Container, Header, Dropdown } from 'rsuite';
import { useHistory } from 'react-router-dom';

export function MainContainer(props) {
    
    let history = useHistory()

	let handleLogout = () => {
		fetch('http://localhost:3000/logout', {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        props.setCurrentUser(null)
	}

    return(
        <Container>
            <Header style={{ marginBottom: '50px' }}>
                <Navbar appearance="inverse">
                    <Navbar.Body>
                        <Nav>
                            <Nav.Item onClick={() => history.push('/')}><b>Home</b></Nav.Item>
                            <Nav.Item onClick={() => history.push('/all')}>Browse</Nav.Item>
                        </Nav>
                        <Nav pullRight>
                            {!props.user ? 
                                <div>
                                    <Nav.Item onClick={() => history.push('/signup')}>Sign Up</Nav.Item>
                                    <Nav.Item onClick={() => history.push('/login')}>Login</Nav.Item>
                                </div>
                                :
                                <Dropdown title={`${props.user.first_name}`}>
                                    <Dropdown.Item>Profile</Dropdown.Item>
                                    <Dropdown.Item onClick={ () => history.push('/mycloset')}>My Closet</Dropdown.Item>
                                    <Dropdown.Item onClick={ () => handleLogout() }>Log Out</Dropdown.Item>
                                </Dropdown>
                            }
                        </Nav>
                    </Navbar.Body>
                </Navbar>
            </Header>
        </Container>
    )
}