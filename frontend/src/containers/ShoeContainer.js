import React, { Component } from 'react';
import { ShoeCard } from '../components/ShoeCard';
import { Row } from 'rsuite';



export default class ShoeContainer extends Component {
    state = {
        shoeList: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/shoes')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                shoeList: data
            })
        })
    }

    render() {
        return(
            <Row>
                {this.state.shoeList.map(shoe => <ShoeCard shoe={shoe} key={shoe.id}/>)}
              
            </Row>
           
        )
    }
}