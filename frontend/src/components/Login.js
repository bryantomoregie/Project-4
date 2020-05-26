import React, { useState } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar, FlexboxGrid, Panel } from 'rsuite';
import { useHistory } from 'react-router'



 export function Login(props){

    let history = useHistory()
    
    const [ user, setUser ] = useState({
        email: '',
        password: ''
    })

    async function handleSubmit(e){
        e.preventDefault()
        let response = await fetch('http://localhost:3000/login', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: user.email,
                password: user.password
            })
        })
        let {success, id} = await response.json()
        if(success){
            // history.push(`/users/${id}`)
            localStorage.id = id
            props.setUser(id)
        }
    }

    return(
        <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={12}>
                <Panel header={<h3>Login</h3>} bordered>
                    <Form fluid>
                        <FormGroup>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl name="email" type="email" value={user.email} onChange={e => setUser({ ...user, email: e })}/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl name="password" type="password" value={user.password} onChange={e => setUser({ ...user, password: e })}/>
                        </FormGroup>
                        <FormGroup>
                            <ButtonToolbar>
                                <Button appearance="primary" onClick={e => handleSubmit(e)}>Sign in</Button>
                                <Button appearance="default" onClick={() => history.push('/')}>Cancel</Button>
                            </ButtonToolbar>
                        </FormGroup>
                    </Form>
                </Panel>
            </FlexboxGrid.Item>
        </FlexboxGrid>

    )
    
}

// export default Login;
