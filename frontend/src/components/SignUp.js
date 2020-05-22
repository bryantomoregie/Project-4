import React, { Component } from 'react'
import { FlexboxGrid } from 'rsuite'
import { Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar } from 'rsuite';

export default class SignUp extends Component {
    render() {
        return(
            <FlexboxGrid justify="center">
                <FlexboxGrid.Item colspan={5}></FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={5}>
                    <Form>
                        <FormGroup>
                            <ControlLabel>Username</ControlLabel>
                            <FormControl name="name" />
                        </FormGroup>
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
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={5}></FlexboxGrid.Item>
            </FlexboxGrid>
        )
    }
}

