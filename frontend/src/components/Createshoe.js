import React, { useState } from 'react';
import { useHistory } from 'react-router'
import { Form, FormGroup, FormControl, ControlLabel, FlexboxGrid, Panel, Button, ButtonToolbar } from 'rsuite';

export function Createshoe() {

    let history = useHistory()
  
    const initialValues = { model: '', size: '', brand: '', price: '', image: '' }

    let [ form, setForm ] = useState(initialValues)

    let setValue = (key, value) => {
        setForm({ ...form, [key]: value })
    }

    let handleClick = (newShoe) => {
        fetch('http://localhost:3000/shoes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newShoe)
        })
        .then(resp => resp.json())
        .then(data => setForm(initialValues));
        history.push('/users/1')
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
                                <Button appearance="default">Cancel</Button>
                            </ButtonToolbar>
                        </FormGroup>
                    </Form>
                </Panel>
            </FlexboxGrid.Item>
        </FlexboxGrid>
        )
}