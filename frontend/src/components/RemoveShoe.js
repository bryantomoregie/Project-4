import React, { Component, useState }  from 'react';
import { Button } from 'rsuite';

export default function RemoveShoe(props) {
    
    const handleRemove = ()=>{
        let newArr= props.cart.filter(c => c.id !== props.shoe.id)
        props.setCart(newArr)
    }
    return(
       <Button onClick={()=> handleRemove() }>Remove</Button>
    )
}