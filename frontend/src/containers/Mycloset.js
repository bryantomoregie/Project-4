import React, { Component } from 'react';
import { Button, IconButton, ButtonGroup, ButtonToolbar, Divider } from 'rsuite';
import { useHistory } from 'react-router'
import { Row, Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'rsuite';
import { Table } from 'rsuite';
import { Panel, PanelGroup } from 'rsuite';
import { ClosetShoeCard } from '../components/ClosetShoeCard'

export default class Mycloset extends Component {

    state = {
		userShoes: []
	}


    componentDidMount() {
      	fetch('http://localhost:3000/shoes',{
        	credentials: 'include',
        	method: 'GET'
      	})
      	.then(resp => resp.json())
      	.then(shoes => {

			const usersShoes = shoes.filter(shoe => shoe.user_id === this.props.user?.id)

			this.setState({
	    	    userShoes: usersShoes
    		})
    	}
    )}

    render(){
      	let userShoes = this.state.userShoes
		
	  	return(
			<div>
				<h1>My Closet</h1>
				<Divider />
      			<Row>
        			{userShoes.map(shoe => <ClosetShoeCard shoe={shoe} key={shoe.id}/>)}
	      		</Row>
			</div>
    	)

	}

}