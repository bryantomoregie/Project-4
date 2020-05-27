import React from 'react'
import { Col, Panel, Divider } from 'rsuite'
import { useParams, useHistory } from 'react-router-dom'

export function ShoeCard(props) {

    let history = useHistory()

    return(
        <Col md={6} sm={12}>
            <Panel shaded onClick={() => history.push(`/shoes/${props.shoe.id}`)}>
                <img src={props.shoe.image} style={{ display: 'inline-block', width: '100%' }} />
                <Divider />
                <Panel header={props.shoe.model}>
                    <div>
                        <p>Size: {props.shoe.size}</p>
                        <br />
                        <p> ${props.shoe.price}</p>
                    </div>
                </Panel>
            </Panel>
        </Col>
    )
}