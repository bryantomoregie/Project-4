import React, { Component, useState }  from 'react';
import { ShoeCard } from '../components/ShoeCard'
import  RemoveShoe  from '../components/RemoveShoe'
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
        
    <div>
    {this.props.cart.map(shoe =><div><ShoeCard shoe={shoe} key={shoe.id}/> <RemoveShoe shoe={shoe} key={shoe.id} cart={this.props.cart} setCart={this.props.setCart}/> </div>)}
    </div>
        <h1>Total Amount: ${this.getTotal()} </h1>
      </div>
      
    )
  }
}
export default Cart;