import React, { useState } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar } from 'rsuite';
import { useHistory } from 'react-router';
import { Container, Header, Content, Footer } from 'rsuite';
import { FlexboxGrid } from 'rsuite'



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
         
            <div className="App">
            
            <Container>
                <Content>
                  <FlexboxGrid justify="center">
                      
                    <FlexboxGrid.Item colspan={5}>
                      <h1>Login</h1>
                        <hr></hr>
                      
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
                        <hr></hr>
                    </FlexboxGrid.Item>
                      
                  </FlexboxGrid>
                </Content>
           
            </Container>
        
        </div>
            
        </Form>
    )
    
}

// export default Login;
