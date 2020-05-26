import React, { useState } from 'react';
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';
import { useHistory } from 'react-router'
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'rsuite';
import { Nav, Dropdown } from 'rsuite';

export function Navigationbar() {
    return(
        <div>
        <Nav>
            <Nav.Item>Home</Nav.Item>
            <Nav.Item>Signup</Nav.Item>
            <Nav.Item>Login</Nav.Item>
            <Nav.Item>About</Nav.Item>
        </Nav>
          <hr></hr>
          </div>
    )
}
