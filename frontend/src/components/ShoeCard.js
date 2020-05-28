import React from 'react'
import { Col, Panel, Divider } from 'rsuite'
import { useParams, useHistory } from 'react-router-dom'

export function ShoeCard(props) {

    let history = useHistory()

    return(
        <Col md={6} sm={12}>
            <Panel shaded onClick={() => history.push(`/shoes/${props.shoe.id}`)} style={{verticalAlign: 'middle', height: '400px'}} align='center'>
                <img src={props.shoe.image} style={{ display: 'inline-block', width: '100%'}} />
                <Divider />
                <Panel header={<b>{props.shoe.model}</b>}>
                    <h6>Size: {props.shoe.size} <Divider vertical /> ${props.shoe.price}</h6>
                </Panel>
            </Panel>
        </Col>
    )
}