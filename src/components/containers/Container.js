import React from 'react'

import { Container } from 'semantic-ui-react'

import TicketSelection from 'Presentational/TicketSelection'
import Button from 'Presentational/Button'

const prices = {
  "adult": 25,
  "children": 15,
  "concessions": 5,
}

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ticketSelected: {
        "adult": 0,
        "children": 0,
        "concessions": 0,
      }
    };
  }

  ticketOnchange = (value, type) => {    
    const ticketSelected = {...this.state.ticketSelected}
    ticketSelected[type] = value && value > 0 ? parseInt(value) : 0
    this.setState({
      ticketSelected: ticketSelected
    });
  }

  totalPrice = () => Object.keys(this.state.ticketSelected)
      .map((key) => prices[key] * this.state.ticketSelected[key])
      .reduce((total, value) => total + value, 0)

  totalTickets = () => Object.keys(this.state.ticketSelected)
    .reduce((total, value) => total + this.state.ticketSelected[value], 0);

  render() {
    const totalPrice = this.totalPrice()

    return (
      <React.Fragment>
        <Container>
          { 
            Object.keys(prices).map((item, index) => (
              <TicketSelection
                ticketType={item}
                value={this.state.ticketSelected[item]}
                price={prices[item]}
                onChange={this.ticketOnchange}
                key={index}
              />
            ))
          }
          <h2>£{totalPrice}</h2>
          <Button 
            title={'Next step'} 
            disabled={ totalPrice === 0 }
          />
        </Container>
        <Container>
          {this.totalTickets()}
        </Container>
      </React.Fragment>
    )
  }
}