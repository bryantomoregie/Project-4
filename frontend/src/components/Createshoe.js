import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Mycloset } from '../containers/Mycloset';
import { Form, FormGroup, FormControl, ControlLabel, FlexboxGrid, Panel, Button, ButtonToolbar } from 'rsuite';

export function Createshoe(props) {

    let history = useHistory()
  
    const initialValues = { model: '', size: '', brand: '', price: '', image: '' }

    let [ form, setForm ] = useState(initialValues)

    let setValue = (key, value) => {
        setForm({ ...form, [key]: value })
    }

    let handleClick = (newShoe) => {
        console.log(newShoe.model)
        console.log(newShoe.user_id)
        fetch('http://localhost:3000/shoes', {
          credentials: 'include',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              model: newShoe.model,
              size: newShoe.size,
              brand: newShoe.brand,
              price: newShoe.price,
              image: newShoe.image,
              user_id: props.user.id
          })
        })
        .then(resp => resp.json())
        .then(data => setForm(initialValues));
    
        history.push('/mycloset')
    }
    
    
    return(
        <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={12}>
                <Panel header={<h3>Create Listing</h3>} bordered>
                    <Form fluid>
                        <FormGroup>
                            <ControlLabel>Model</ControlLabel>
                            <FormControl  
                                name="model" 
                                formValue={form.model} 
                                onChange={e => setValue('model', e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Size</ControlLabel>
                            <FormControl 
                                name="size" 
                                formValue={form.size} 
                                onChange={e => setValue('size', e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Brand</ControlLabel>
                            <FormControl 
                                name="brand" 
                                formValue={form.brand} 
                                onChange={e => setValue('brand', e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Price</ControlLabel>
                            <FormControl  
                                name="price" 
                                formValue={form.price} 
                                onChange={e => setValue('price', e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Image</ControlLabel>
                            <FormControl  
                                name="image" 
                                formValue={form.image} 
                                onChange={e => setValue('image', e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <ButtonToolbar>
                                <Button appearance="primary" onClick={() => handleClick(form)}>Submit</Button>
                                <Button appearance="default" onClick={() => history.push('/')}>Cancel</Button>
                            </ButtonToolbar>
                        </FormGroup>
                    </Form>
                </Panel>
            </FlexboxGrid.Item>
        </FlexboxGrid>
        )
}