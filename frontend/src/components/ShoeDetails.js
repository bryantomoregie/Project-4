import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from 'rsuite'


export default function ShoeDetails(props) {

    let params = useParams()

    let [ shoe, setShoe ] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/shoes/${params.id}`)
        .then(resp => resp.json())
        .then(data => setShoe(data))
    }, [])

   const handleAddtoCart = (e)=>{
       let newCart = props.cart.concat([shoe])
       debugger
        props.setCart(newCart)
        
    }

    return(
        <div>
            <h1>{shoe.model}</h1>
            <img src = {shoe.image}></img>
            <Button appearance="primary" onClick={handleAddtoCart}>Add To Cart</Button>
        </div>
    )
}