import React, { useState } from 'react';
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';
import { useHistory } from 'react-router'
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'rsuite';

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
        <div>
        <h1>Add Shoe</h1>
            <Form fluid>
                <FormGroup>
                    <ControlLabel>Model</ControlLabel>
                    <FormControl  
                        name="model" 
                        formValue={form.model} 
                        onChange={e => setValue('model', e)}
                    />
                    <HelpBlock>Required</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Size</ControlLabel>
                    <FormControl 
                        name="size" 
                        formValue={form.size} 
                        onChange={e => setValue('size', e)}
                    />
                    <HelpBlock>Required</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Brand</ControlLabel>
                    <FormControl 
                        name="brand" 
                        formValue={form.brand} 
                        onChange={e => setValue('brand', e)}
                    />
                <HelpBlock>Required</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Price</ControlLabel>
                    <FormControl  
                        name="price" 
                        formValue={form.price} 
                        onChange={e => setValue('price', e)}
                    />
                    <HelpBlock>Required</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Image</ControlLabel>
                    <FormControl  
                        name="image" 
                        formValue={form.image} 
                        onChange={e => setValue('image', e)}
                    />
                    <HelpBlock>Required</HelpBlock>
                </FormGroup>
                {/* <FormGroup>
                    <ControlLabel>Description</ControlLabel>
                    <FormControl rows={5} name="textarea" componentClass="textarea" />
                </FormGroup> */}
                <FormGroup>
                    <ButtonToolbar>
                        <Button appearance="primary" onClick={() => handleClick(form)}>Submit</Button>
                        <Button appearance="default">Cancel</Button>
                    </ButtonToolbar>
                </FormGroup>
            </Form>
            </div>
        )
}