import React, { Component } from 'react';
import { ShoeCard } from '../components/ShoeCard';
import { Row, Form, FormGroup, FormControl, Divider } from 'rsuite';


export default class ShoeContainer extends Component {
    
    state = {
        shoeList: [],
        filteredShoes: null
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

    handleSearch = (query) => {
        let filteredShoeList = this.state.shoeList.filter(shoe => shoe.model.toLowerCase().includes(query.toLowerCase()))
        console.log(filteredShoeList)
        this.setState({
            filteredShoes: filteredShoeList
        })
    }

    render() {

        let shoes = this.state.filteredShoes == null ? this.state.shoeList : this.state.filteredShoes

        return(
            <div>
                <h1>Current Listings</h1>
                <Divider />
                <Row>
                    <Form fluid>
                        <FormGroup>
                            <FormControl placeholder="Search..." name="search" onChange={(e) => this.handleSearch(e)}/>
                        </FormGroup>
                    </Form>
                </Row>
                <br />
                <Row>
                    {shoes.map(shoe => <ShoeCard shoe={shoe} key={shoe.id}/>)}
                </Row>
            </div>
        )
    }
}