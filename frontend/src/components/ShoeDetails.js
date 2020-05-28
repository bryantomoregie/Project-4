import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, FlexboxGrid, Divider } from 'rsuite'


export default function ShoeDetails(props) {

    let params = useParams()

    let [ shoe, setShoe ] = useState({
        model: '',
        brand: '',
        image: '',
        price: 0,
        size: 0,
        user: {
            id: 0,
            first_name: '',
            last_name: '',
            email: ''
        }
    })

    useEffect(() => {
        fetch(`http://localhost:3000/shoes/${params.id}`)
        .then(resp => resp.json())
        .then(data => setShoe(data))
    }, [])

    const handleAddtoCart = (e) => {
        let newCart = props.cart.concat([shoe])
        props.setCart(newCart)        
    }

  

    return(
        <div>
            <FlexboxGrid align="middle">
                <FlexboxGrid.Item colspan={12}>
                    <img src={shoe.image} style={{ width: '100%' }} />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={2}></FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={10} align='center'>
                    <h3>{shoe.brand} {shoe.model}</h3>
                    <Divider />
                    <h4>Size: {shoe.size}</h4>
                    <h4>${shoe.price}</h4>
                    <h4>Seller: {shoe.user.first_name}</h4>
                    <br />
                    <Button appearance="primary" onClick={handleAddtoCart} >Add To Cart</Button>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </div>
    )
}