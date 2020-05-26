import React, { useState } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar, FlexboxGrid, Panel } from 'rsuite';

export default function SignUp(props) {

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
        .then(data => console.log(data))
    }
    
    return(
        <FlexboxGrid align="middle" justify="center">
            <FlexboxGrid.Item colspan={12}>
                <Panel header={<h3>Sign Up</h3>} bordered>
                    <Form fluid>
                        <FormGroup>
                            <ControlLabel>First Name</ControlLabel>
                            <FormControl 
                                name='firstName' 
                                formValue={form.firstName} 
                                onChange={e => setValue('firstName', e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Last Name</ControlLabel>
                            <FormControl 
                                name="lastName"
                                formValue={form.lastName} 
                                onChange={e => setValue('lastName', e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl 
                                name="email" 
                                formValue={form.email} 
                                onChange={e => setValue('email', e)}   
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl 
                                name="password"
                                type="password" 
                                formValue={form.password} 
                                onChange={e => setValue('password', e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <ButtonToolbar>
                                <Button appearance="primary" onClick={() => handleSignup(form)}>Submit</Button>
                                <Button appearance="default">Cancel</Button>
                            </ButtonToolbar>
                        </FormGroup>
                    </Form>
                </Panel>
            </FlexboxGrid.Item>
        </FlexboxGrid>   
    )
}

