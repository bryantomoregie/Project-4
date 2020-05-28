import React, { Component, useState }  from 'react';
import { ShoeCard } from '../components/ShoeCard'
class Cart extends Component {
  getTotal(){
    let total = 0 
    this.props.cart.forEach(shoe => {
      total += shoe.price
    });
      return total
  }
  render(){
    
    return(
     
      <div>
        <div>{this.props.cart.map(shoe => <ShoeCard shoe={shoe} key={shoe.id}/>)}</div>
        <h1>Total Amount: ${this.getTotal()} </h1>
      </div>
      
    )
  }
}
export default Cart;