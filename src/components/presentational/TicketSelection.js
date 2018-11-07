import React from 'react'

import { Segment, Input, Label } from 'semantic-ui-react'
import { capitalize } from 'Helpers'

export default (props) => {

  return (
    <Segment>
      <Label>{capitalize(props.ticketType)}</Label>
      <div>£{props.price}</div>
      <Input 
        name={props.ticketType}
        type='number'
        min={0}
        value={props.value > 0 ? props.value : ''}
        placeholder={0}
        onChange={(e) => {
          props.onChange(e.target.value, props.ticketType)
        }} 
      />
    </Segment>
  )
}
