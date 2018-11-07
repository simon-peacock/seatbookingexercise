import React from 'react'

import { Button } from 'semantic-ui-react'

export default (props) => {

  return (
    <Button disabled={props.disabled}>{props.title}</Button>
  )
}
