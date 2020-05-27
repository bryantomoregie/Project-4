import React from 'react'
import { Col, Panel, Divider } from 'rsuite'

export function ClosetShoeCard(props) {

return(
  <Col md={6} sm={12}>
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: '100%' }}>
      <img src={props.shoe.image} height="240" />
    <Panel header={props.shoe.model}>
      <div>
        <p>Size: {props.shoe.size}</p>
        <br></br>
        <p> ${props.shoe.price}</p>
    </div>
    </Panel>
    </Panel>
  </Col>
)
}