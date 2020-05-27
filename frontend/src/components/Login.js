import React, { useState } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar, FlexboxGrid, Panel } from 'rsuite';
import { useHistory } from 'react-router'



 export function Login(props){

    let history = useHistory()
    

    const [ form, setUser ] = useState({
        email: '',
        password: ''
    })

    async function handleSubmit(e){
        e.preventDefault()
        let response = await fetch('http://localhost:3000/login',{
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: form.email,
                password: form.password
            })
        })
        let {success, user} = await response.json()
        if(success){
            // console.log(user)
            // console.log(user.id)
            props.setCurrentUser(user)
           history.push(`/`)
        }
    }

    return(
        <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={12}>
                <Panel header={<h3>Login</h3>} bordered>
                    <Form fluid>
                        <FormGroup>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl name="email" type="email" value={form.email} onChange={e => setUser({ ...form, email: e })}/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl name="password" type="password" value={form.password} onChange={e => setUser({ ...form, password: e })}/>
                        </FormGroup>
                        <FormGroup>
                            <ButtonToolbar>
                                <Button appearance="primary" onClick={e => handleSubmit(e)}>Sign in</Button>
                            </ButtonToolbar>
                        </FormGroup>
                    </Form>
                </Panel>
            </FlexboxGrid.Item>
        </FlexboxGrid>

    )
    
}

// export default Login;
