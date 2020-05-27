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

    return(
        <div>
            <h1>{shoe.model}</h1>
            <Button appearance="primary">Add To Cart</Button>
        </div>
    )
}