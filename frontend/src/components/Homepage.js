import React, { Component } from 'react';
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';

export default class Homepage extends Component {
    render(){
        return(
            <div>
                <h2>Do you want to browse shoes?</h2>
                <ButtonToolbar>
                    <Button size="lg" appearance="subtle" active>Browse shoes</Button>
                </ButtonToolbar>
            </div>
        )
    }
}

