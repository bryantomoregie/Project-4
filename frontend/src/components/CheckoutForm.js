import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, FlexboxGrid, HelpBlock } from 'rsuite';
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';
import { Dropdown } from 'rsuite';
import { Alert } from 'rsuite';

class CheckoutForm extends Component {
    

    state = {
        total: 0,
        name: '',
        email: '',
        cardname: '',
        cardnumber: '',
        state: '',
        country: ''
    }

    componentDidMount() {
        this.props.cart.forEach(shoe => {
          this.setState({
            total: this.state.total += shoe.price
          })
        });
          return this.state.total
      };


      changeName = (e) => {
            this.setState({
                name: e
            })
      }


      changeEmail = (e) => {
        this.setState({
            email: e
        })
      }

      changeState = (e) => {
        this.setState({
            state: e
        })
      }

      changeAddress = (e) => {
        this.setState({
            address: e
        })
      }

      changeCardName = (e) => {
        this.setState({
            cardname: e
        })
      }

      changeCardNumber = (e) => {
        this.setState({
            cardnumber: e
        })
      }

      changeCountry = (e) => {
        this.setState({
            country: e
        })
      }

      clearForm = () => {
        Alert.success('Your purchase was successful!')
          this.setState({
              total: 0,
              name: '',
              email: '',
              address: '',
              cardname: '',
              cardnumber: '',
              state: '',
              country: ''
          })
          this.props.clearCart()
      }



    

    render() {
        console.log(this.state.total)

        return (
            <FlexboxGrid justify="center">
               
                <Form>
                    <h2>Billing Address </h2>
                    <FormGroup>
                        <ControlLabel>Full Name</ControlLabel>
                        <FormControl value={this.state.name} onChange={(e) => this.changeName(e)}name="name" />
                        <HelpBlock>Required</HelpBlock>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Email</ControlLabel>
                        <FormControl value={this.state.email} onChange={(e) => this.changeEmail(e)} email="email" />
                        <HelpBlock>Required</HelpBlock>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel> Address </ControlLabel>
                        <FormControl value={this.state.address} onChange={(e) => this.changeAddress(e)}name="address" type="address" />
                        <HelpBlock >Required</HelpBlock>
                    </FormGroup>
                    <FormGroup>
                   
                    <Dropdown value={this.state.country} onChange={(e) => this.changeCountry(e)} title="United States">
                        <Dropdown.Item>United States</Dropdown.Item>
                    </Dropdown>
                    </FormGroup>
                    <FormGroup>
                    <Dropdown value={this.state.state} onChange={(e) => this.changeState(e)} title="Texas">
                        <Dropdown.Item>Lousiana</Dropdown.Item>
                        <Dropdown.Item>Texas</Dropdown.Item>
                    </Dropdown>  
            
                    </FormGroup>
                    <Form layout="inline">
                        
                    <FormGroup>
                        <ControlLabel srOnly>Name on Card</ControlLabel>
                        <FormControl onChange={(e) => this.changeCardName(e)}placeholder="Name on Card" name="username" />
                        <HelpBlock >Required</HelpBlock>
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel srOnly>Credit Card Number</ControlLabel>
                        <FormControl value={this.state.cardNumber}onChange={(e) => this.changeCardNumber(e)}placeholder="Credit Card Number" name="password" type="password" />
                        <HelpBlock >Required</HelpBlock>
                    </FormGroup>

                    </Form>             
                    <FormGroup>
                    <ButtonToolbar>
                        <Button onClick={() => this.clearForm()} appearance="primary">Purchase</Button>
                        <Button appearance="default">Cancel</Button>
                    </ButtonToolbar>
                    </FormGroup>
                </Form>
                <h1>Total: ${this.state.total} </h1>
            </FlexboxGrid>

        )
    }
}

export default CheckoutForm;