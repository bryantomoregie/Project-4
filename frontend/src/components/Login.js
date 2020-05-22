import React, { useState } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar } from 'rsuite';
import { useHistory } from 'react-router'


 export function Login(props){

    let history = useHistory()
    

    const [user, changeUser ] = useState({
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
                email: user.email,
                password: user.password
            })
        })
        let {success, id} = await response.json()
        if(success){
            history.push(`/users/${id}`)
        }
    }

    return(
        <Form >
            <h1>Login</h1>
            <FormGroup>
                <ControlLabel>Email</ControlLabel>
                 <FormControl name="email" type="email" value={user.email} onChange={e => changeUser({...user,email: e})} />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Password</ControlLabel>
                    <FormControl name="password" type="password" value={user.password} onChange={e => changeUser({...user,password: e})}/>
                </FormGroup>
                <FormGroup>
                <ButtonToolbar>
                    <Button appearance="primary" onClick={(e) => handleSubmit(e)}>Submit</Button>
                <Button appearance="default">Cancel</Button>
                </ButtonToolbar>
            </FormGroup>
        </Form>
    )
    
}

// export default Login;
