import React, { Component } from 'react';
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';
import { useHistory } from 'react-router'
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'rsuite';
import { Table } from 'rsuite';
const { Column, HeaderCell, Cell, Pagination } = Table;

export default class Mycloset extends Component {

    state = {
      userShoes: []
    }


    componentDidMount() {
      fetch('http://localhost:3000/shoes')
      .then(resp => resp.json())
      .then(shoes =>
        // userShoes = shoes.map(shoe => shoe.user_id === user.id) 
      {this.setState({
        userShoes: shoes 
      })
      console.log(shoes)
    }
    )}

    render(){
      console.log(this.state.userShoes)
    return(
        <div>
        <Table
          virtualized
          height={400}
           data={this.state.userShoes}
           
           onRowClick={data => {
            console.log(data);
           }}
        >
          <Column width={70} align="center" fixed>
            <HeaderCell>Image</HeaderCell>
            <Cell dataKey="image" />
          </Column>

          <Column width={130}>
            <HeaderCell>Model</HeaderCell>
            <Cell dataKey="model" />
          </Column>

          <Column width={130}>
            <HeaderCell>Brand</HeaderCell>
            <Cell dataKey="brand" />
          </Column>

          <Column width={200}>
            <HeaderCell>Size</HeaderCell>
            <Cell dataKey="size" />
          </Column>

          <Column width={200}>
            <HeaderCell>Price</HeaderCell>
            <Cell dataKey="price" />
          </Column>

        </Table>
      </div>
    )

}
}