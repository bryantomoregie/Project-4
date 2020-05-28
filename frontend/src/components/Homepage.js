import React, { Component } from 'react';
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';
import { useHistory } from 'react-router';
import { Divider } from 'rsuite';
import { FlexboxGrid } from 'rsuite';
import '../Homepage.css';
import 'rsuite/dist/styles/rsuite-default.css';

export function Homepage(props){
    
    let history = useHistory()
 
        return(
            
         
            <FlexboxGrid justify="space-around">
                
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                <div colspan={8}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2>Do you want to browse shoes?</h2>
                    <ButtonToolbar>
                        <Button onClick={ () => history.push('/all')} size="lg" appearance="subtle" active>Browse shoes</Button>
                    </ButtonToolbar>
                </div>


               
    
                <div colspan={8}>
                <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2>Do you want to sell shoes?</h2>
                    <ButtonToolbar >
                        <Button onClick={ props.user ? () => history.push('/createshoe') : () => history.push('/login') } size="lg" appearance="subtle" active>Sell shoes</Button>
                    </ButtonToolbar>
                </div>
            </FlexboxGrid>
        )
}

