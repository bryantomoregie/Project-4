import React from 'react'
import { Col, Panel, Divider } from 'rsuite'
import { useHistory } from 'react-router-dom';

export function ClosetShoeCard(props) {

  let history = useHistory()

  let truncate = function(str) {
      return str.length > 40 ? str.substring(0, 40) + "..." : str;
  }

  return(
      <Col md={6} sm={12}>
          <Panel shaded onClick={() => history.push(`/shoes/${props.shoe.id}`)} style={{minHeight: '425px'}} >
              <img src={props.shoe.image} style={{ display: 'inline-block', width: '100%'}} />
              <Divider />
              <Panel>
                  <div>
                      <h5>{truncate(props.shoe.model)}</h5>
                      <p>Size: {props.shoe.size}</p>
                      <br />
                      <p> ${props.shoe.price}</p>
                  </div>
              </Panel>
          </Panel>
      </Col>
  )

}