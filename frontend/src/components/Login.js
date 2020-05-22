import React, { Component } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar } from 'rsuite';

export default class Login extends Component {
    render() {
        return(
            <Form>
                <h1>Login</h1>
                <FormGroup>
                    <ControlLabel>Email</ControlLabel>
                    <FormControl name="email" type="email" />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Password</ControlLabel>
                    <FormControl name="password" type="password"/>
                </FormGroup>
                <FormGroup>
                <ButtonToolbar>
                    <Button appearance="primary">Submit</Button>
                    <Button appearance="default">Cancel</Button>
                </ButtonToolbar>
                </FormGroup>
            </Form>
        )
    }
}

