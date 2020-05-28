import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, FlexboxGrid, HelpBlock } from 'rsuite';
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';
import { Dropdown } from 'rsuite';

class CheckoutForm extends Component {
    

   

    render() {

        return (
            <FlexboxGrid justify="center">
               
                <Form>
                    <h2>Billing Address </h2>
                    <FormGroup>
                        <ControlLabel>Full Name</ControlLabel>
                        <FormControl name="name" />
                        <HelpBlock>Required</HelpBlock>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Email</ControlLabel>
                        <FormControl name="name" />
                        <HelpBlock>Required</HelpBlock>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Address   </ControlLabel>
                        <FormControl name="email" type="email" />
                        <HelpBlock tooltip>Required</HelpBlock>
                    </FormGroup>
                    <FormGroup>
                    {/* <Form layout="inline"> */}
                    <Dropdown title="Choose Country">
                        <Dropdown.Item>United States</Dropdown.Item>
                    </Dropdown>
                    </FormGroup>
                    <FormGroup>
                    <Dropdown title="Choose State">
                        <Dropdown.Item>Lousiana</Dropdown.Item>
                        <Dropdown.Item>Texas</Dropdown.Item>
                    </Dropdown>  
                    {/* </Form>                */}
                    </FormGroup>
                    <Form layout="inline">
                        
                    <FormGroup>
                        <ControlLabel srOnly>Name on Card</ControlLabel>
                        <FormControl placeholder="Name on Card" name="username" />
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel srOnly>Credit Card Number</ControlLabel>
                        <FormControl placeholder="Credit Card Number" name="password" type="password" />
                    </FormGroup>

                    </Form>             
                    <FormGroup>
                    <ButtonToolbar>
                        <Button appearance="primary">Purchase</Button>
                        <Button appearance="default">Cancel</Button>
                    </ButtonToolbar>
                    </FormGroup>
                </Form>
            </FlexboxGrid>

        )
    }
}

export default CheckoutForm;