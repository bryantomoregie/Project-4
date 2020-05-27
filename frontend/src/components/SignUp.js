import React, { useState, useEffect } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar, FlexboxGrid, Panel } from 'rsuite';
import { useHistory } from 'react-router-dom';

export default function SignUp(props) {

    let history = useHistory()

    const initialValues = { firstName: '', lastName: '', email: '', password: '' }

    let [ form, setForm ] = useState(initialValues)

    let setValue = (key, value) => {
        setForm({ ...form, [key]: value })
    }

    let handleSignup = (newUser) => {
        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
        .then(resp => resp.json())
        .then(data => setForm(initialValues))
       history.push('/login')
    }

    useEffect(() => { console.log('running') }, [])
  
    return(
        <FlexboxGrid align="middle" justify="center">
            <FlexboxGrid.Item colspan={12}>
                <Panel header={<h3>Sign Up</h3>} bordered>
                    <Form formValue={form} fluid>
                        <FormGroup>
                            <ControlLabel>First Name</ControlLabel>
                            <FormControl 
                                name='firstName'  
                                onChange={e => setValue('firstName', e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Last Name</ControlLabel>
                            <FormControl 
                                name="lastName"
                                onChange={e => setValue('lastName', e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl 
                                name="email"  
                                onChange={e => setValue('email', e)}   
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl 
                                name="password"
                                type="password" 
                                onChange={e => setValue('password', e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <ButtonToolbar>
                                <Button appearance="primary" onClick={() => handleSignup(form)}>Submit</Button>
                                <Button appearance="default" onClick={() => history.push('/')}>Cancel</Button>
                            </ButtonToolbar>
                        </FormGroup>
                    </Form>
                </Panel>
            </FlexboxGrid.Item>
        </FlexboxGrid>   
    )
}

