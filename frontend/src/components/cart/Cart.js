import React, { useState }  from 'react';
import EmptyCart from './EmptyCart'
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import Title from "../Title";

export function Cart(props) {
    // const [ cart, setCart ] = useState({
    //     products: '',
    //     total: 0
    // })
    return(
        <div>
        
        {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
        }}
        </div>
    )
}