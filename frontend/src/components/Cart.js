import React, { Component, useState }  from 'react';
import { ShoeCard } from '../components/ShoeCard'
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';
import { useHistory } from 'react-router-dom';
import CheckoutForm from './CheckoutForm'
import RemoveShoe from '../components/RemoveShoe'

export function Cart (props) {
  let history = useHistory()
  
  let [ total, setTotal ] = useState(0)
  
let getTotal = () => {

  props.cart.forEach(shoe => {
    total += shoe.price
  });

    return total
};


    
    return(
     
      <div>

       <div>
        {props.cart.map(shoe =><div><ShoeCard shoe={shoe} key={shoe.id}/> <RemoveShoe shoe={shoe} key={shoe.id} cart={props.cart} setCart={props.setCart}/> </div>)}
        </div>
        <h1>Total Amount: ${getTotal()} </h1>
        <ButtonToolbar>
 
          <Button appearance="primary" onClick={() => history.push('/checkoutform')}>Proceed To Checkout</Button>

        </ButtonToolbar>
      </div> 
    )
}
export default Cart;